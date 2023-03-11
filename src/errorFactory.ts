import { detectEnv } from "./detect-env";
import type { IError } from "./types";

/**
 ** builds a Error Class
 */
export function buildErrorFactory() {
  const isNode = detectEnv() === "node";
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
      if (isNode && Error.captureStackTrace) {
        Error.captureStackTrace(this, ErrorFactory);
      }
    }
    override name: string;
    override message: string;
    detail: string | undefined;
    nativeError: Error | undefined;
    path: string | undefined;
    timestamp: number;
  };
}
