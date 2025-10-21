import { Clock } from '../application/greet-command';

export class SystemClock implements Clock {
  now(): Date {
    return new Date();
  }
}
