import { StatusCodes } from "http-status-codes";

export interface i_payload_result<T> {
  code: StatusCodes;
  payload: T;
}

export interface i_error_result {
  code: StatusCodes;
  error: string;
}
export interface i_payload<T> {
  payload: T ;
}
export interface i_req_error {
  error: string;
}
export interface i_url {
  url: string;
}

export type t_http_verbs = "GET" | "HEAD" | "POST" | "PUT" | "PATCH" | "DELETE";
