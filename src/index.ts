import { GreetCommand } from './application/greet-command';
import { DefaultGreetingService } from './domain/greeting-service';
import { DefaultTimestampFormatter } from './domain/timestamp-formatter';
import { ConsoleOutput } from './infrastructure/console-output';
import { FileHistoryRecorder } from './infrastructure/file-history-recorder';
import { ProcessLocaleProvider } from './infrastructure/process-locale-provider';
import { SystemClock } from './infrastructure/system-clock';

async function main(args: string[]): Promise<void> {
  const command = new GreetCommand(
    new ProcessLocaleProvider(args),
    new DefaultGreetingService(),
    new ConsoleOutput(),
    new FileHistoryRecorder('history.txt'),
    new SystemClock(),
    new DefaultTimestampFormatter()
  );

  await command.execute();
}

main(process.argv).catch((error) => {
  console.error(error);
  process.exit(1);
});
