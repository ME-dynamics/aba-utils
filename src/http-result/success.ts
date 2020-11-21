import { StatusCodes } from "http-status-codes";
import { i_http_result, i_http } from "../types";

function success<T>(args: i_http<T>, code: number): i_http_result<T> {
  const { payload } = args;
  if (!payload) throw new Error("payload must be defined in ok status code");
  return {
    code,
    payload,
    error: undefined
  };
}

export function ok<T>(args: i_http<T>): i_http_result<T> {
  return success(args, StatusCodes.OK);
}

export function created<T>(args: i_http<T>): i_http_result<T> {
  return success(args, StatusCodes.CREATED);
}

export function no_content<T>(args: i_http<T>): i_http_result<T> {
  return success(args, StatusCodes.NO_CONTENT);
}

export function accepted<T>(args: i_http<T>): i_http_result<T> {
  return success(args, StatusCodes.ACCEPTED);
}

export function non_authoritative_information<T>(args: i_http<T>): i_http_result<T> {
  return success(args, StatusCodes.NON_AUTHORITATIVE_INFORMATION);
}

export function reset_content<T>(args: i_http<T>): i_http_result<T> {
  return success(args, StatusCodes.RESET_CONTENT);
}

export function partial_content<T>(args: i_http<T>): i_http_result<T> {
  return success(args, StatusCodes.PARTIAL_CONTENT);
}

export function multi_status<T>(args: i_http<T>): i_http_result<T> {
  return success(args, StatusCodes.MULTI_STATUS);
}