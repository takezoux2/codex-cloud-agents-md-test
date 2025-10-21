export interface GreetingService {
  getGreeting(locale: string | undefined): string;
}

export class DefaultGreetingService implements GreetingService {
  getGreeting(locale: string | undefined): string {
    if (locale === 'ja') {
      return 'こんにちは世界';
    }
    return 'Hello world';
  }
}
