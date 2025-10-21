import { GreetingService } from '../domain/greeting-service';
import { TimestampFormatter } from '../domain/timestamp-formatter';

export interface LocaleProvider {
  getLocale(): string | undefined;
}

export interface OutputPort {
  write(message: string): Promise<void>;
}

export interface HistoryRecorder {
  append(entry: string): Promise<void>;
}

export interface Clock {
  now(): Date;
}

export class GreetCommand {
  constructor(
    private readonly localeProvider: LocaleProvider,
    private readonly greetingService: GreetingService,
    private readonly output: OutputPort,
    private readonly historyRecorder: HistoryRecorder,
    private readonly clock: Clock,
    private readonly timestampFormatter: TimestampFormatter
  ) {}

  async execute(): Promise<void> {
    const locale = this.localeProvider.getLocale();
    const greeting = this.greetingService.getGreeting(locale);
    await this.output.write(greeting);

    const timestamp = this.timestampFormatter.format(this.clock.now());
    await this.historyRecorder.append(timestamp);
  }
}
