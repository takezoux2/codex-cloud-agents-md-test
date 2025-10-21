export interface TimestampFormatter {
  format(date: Date): string;
}

export class DefaultTimestampFormatter implements TimestampFormatter {
  format(date: Date): string {
    const year = date.getFullYear();
    const month = this.pad(date.getMonth() + 1);
    const day = this.pad(date.getDate());
    const hours = this.pad(date.getHours());
    const minutes = this.pad(date.getMinutes());
    const seconds = this.pad(date.getSeconds());
    return `${year}${month}${day} ${hours}:${minutes}:${seconds}`;
  }

  private pad(value: number): string {
    return value < 10 ? `0${value}` : String(value);
  }
}
