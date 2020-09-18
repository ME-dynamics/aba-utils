import { StatusCodes } from "http-status-codes";

export interface IHttpResult<T> {
  code: StatusCodes;
  payload?: T;
  error?: string;
}

export interface IUrl {
  url: string;
}

export type THttpVerbs = "GET" | "HEAD" | "POST" | "PUT" | "PATCH" | "DELETE";
