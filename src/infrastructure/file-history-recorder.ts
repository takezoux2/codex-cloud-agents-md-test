import { promises as fs } from 'fs';
import { dirname, resolve } from 'path';
import { HistoryRecorder } from '../application/greet-command';

export class FileHistoryRecorder implements HistoryRecorder {
  private readonly absolutePath: string;
  private readonly directory: string;

  constructor(relativePath: string) {
    this.absolutePath = resolve(process.cwd(), relativePath);
    this.directory = dirname(this.absolutePath);
  }

  async append(entry: string): Promise<void> {
    await fs.mkdir(this.directory, { recursive: true });
    const normalizedEntry = entry.endsWith('\n') ? entry : `${entry}\n`;
    await fs.appendFile(this.absolutePath, normalizedEntry, { encoding: 'utf-8' });
  }
}
