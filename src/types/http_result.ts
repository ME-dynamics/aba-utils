import { StatusCodes } from "http-status-codes";

export interface i_http_result<T> {
  code: StatusCodes;
  payload: T | undefined;
  error: string | undefined;
}

export interface i_http<T> {
  payload: T | undefined;
  error: string | undefined;
}

export interface i_url {
  url: string;
}

export type t_http_verbs = "GET" | "HEAD" | "POST" | "PUT" | "PATCH" | "DELETE";
