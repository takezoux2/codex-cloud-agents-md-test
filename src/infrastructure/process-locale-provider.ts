import { LocaleProvider } from '../application/greet-command';

export class ProcessLocaleProvider implements LocaleProvider {
  constructor(private readonly args: string[]) {}

  getLocale(): string | undefined {
    return this.args[2];
  }
}
