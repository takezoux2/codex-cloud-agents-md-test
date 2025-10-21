declare module 'fs' {
  export const promises: {
    appendFile(path: string, data: string, options?: { encoding?: string; flag?: string }): Promise<void>;
    mkdir(path: string, options?: { recursive?: boolean }): Promise<void>;
    access(path: string): Promise<void>;
  };
}

declare module 'path' {
  export function resolve(...paths: string[]): string;
  export function dirname(path: string): string;
}

declare const process: {
  argv: string[];
  cwd(): string;
  exit(code?: number): never;
};
