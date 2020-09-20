import { StatusCodes } from "http-status-codes";

export interface IHttpResult<T> {
  code: StatusCodes;
  payload: T | undefined;
  error: string | undefined;
}

export interface IUrl {
  url: string;
}

export type THttpVerbs = "GET" | "HEAD" | "POST" | "PUT" | "PATCH" | "DELETE";
