# codex-cloud-agents-md-test

A small TypeScript CLI that prints a localized greeting and records the execution timestamp according to **spec01**.

## Usage

1. Build the project:
   ```bash
   npm run build
   ```
2. Run the CLI, passing an optional locale argument:
   ```bash
   node dist/index.js ja
   ```

- When the locale is `ja`, the program prints `こんにちは世界`. Any other value yields `Hello world`.
- Each execution appends the current timestamp (`yyyyMMdd HH:mm:ss`) to `history.txt` in the project root.

The application follows a layered architecture with dependency injection so that IO concerns (console, filesystem, clock, and CLI arguments) remain separated from the domain logic.
