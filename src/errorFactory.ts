import { detectEnv } from "./detect-env";
import type { IError } from "./types";

/**
 * Builds an Error Class
 */
export function buildErrorFactory() {
  const isNode = detectEnv() === "node";
  return class ErrorFactory extends Error {
    readonly name: string;
    readonly message: string;
    readonly detail: string | undefined;
    readonly nativeError?: Error | undefined;
    readonly path: string | undefined;
    readonly timestamp: number;

    constructor(args: IError) {
      const { name, message, detail, nativeError, path } = args;
      super(message);
      this.name = name;
      this.message = message;
      this.detail = detail;
      this.nativeError = nativeError;
      this.path = path;
      this.timestamp = Date.now();
      if (isNode && Error.captureStackTrace) {
        Error.captureStackTrace(this, ErrorFactory);
      }
    }
  };
}
