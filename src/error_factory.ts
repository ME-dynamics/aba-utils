import { detect } from "./detect-env";
import { i_error } from "./types";

export function build_error_factory() {
  const is_node = detect() === "node";
  return class error_factory extends Error {
    constructor(args: i_error) {
      const { name, message, detail, native_error, path } = args;
      super(message);
      this.name = name;
      this.message = message;
      this.detail = detail;
      this.native_error = native_error;
      this.path = path;
      this.timestamp = Date.now();
      if (is_node) {
        Error.captureStackTrace(this);
      }
    }
    name: string;
    message: string;
    detail: string | undefined;
    native_error: Error | undefined;
    path: string | undefined;
    timestamp: number;
  };
}
