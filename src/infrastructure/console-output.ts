import { OutputPort } from '../application/greet-command';

export class ConsoleOutput implements OutputPort {
  async write(message: string): Promise<void> {
    console.log(message);
  }
}
