import { nanoid } from "nanoid";

import {IError } from "./types";

export class ErrorFactory extends Error{
  constructor(args: IError) {
    const {
      error,
      message,
      detail,
      errorId = nanoid(),
      nativeError,
      path,
      timestamp = Date.now(),
    } = args;
    super(message);
    this.errorId = errorId;
    this.error = error;
    this.message = message;
    this.detail = detail;
    this.nativeError = nativeError;
    this.path = path;
    this.timestamp = timestamp;
  }
  error: string;
  message: string;
  detail?: string;
  errorId?: string;
  nativeError?: Error;
  path?: string;
  timestamp?: number;
}
