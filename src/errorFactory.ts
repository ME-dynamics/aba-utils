import { detect } from "./detect-env";
import { IError } from "./types";

export function buildErrorFactory() {
  const isNode = detect() === "node";
  return class ErrorFactory extends Error {
    constructor(args: IError) {
      const { name, message, detail, nativeError, path } = args;
      super(message);
      this.name = name;
      this.message = message;
      this.detail = detail;
      this.nativeError = nativeError;
      this.path = path;
      this.timestamp = Date.now();
      if (isNode) {
        Error.captureStackTrace(this);
      }
    }
    name: string;
    message: string;
    detail: string | undefined;
    nativeError: Error | undefined;
    path: string | undefined;
    timestamp: number;
  };
}
