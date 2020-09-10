import { StatusCodes } from "http-status-codes";
import { IHttpResult, IResult } from "../types";

function success<T>(args: IResult<T>, code: number): IHttpResult<T> {
  const { payload } = args;
  if (!payload) throw new Error("payload must be defined in ok status code");
  return {
    code,
    payload,
  };
}

export function ok<T>(args: IResult<T>): IHttpResult<T> {
  return success(args, StatusCodes.OK);
}

export function created<T>(args: IResult<T>): IHttpResult<T> {
  return success(args, StatusCodes.CREATED);
}

export function noContent<T>(args: IResult<T>): IHttpResult<T> {
  return success(args, StatusCodes.NO_CONTENT);
}

export function accepted<T>(args: IResult<T>): IHttpResult<T> {
  return success(args, StatusCodes.ACCEPTED);
}

export function nonAuthoritativeInformation<T>(args: IResult<T>): IHttpResult<T> {
  return success(args, StatusCodes.NON_AUTHORITATIVE_INFORMATION);
}

export function resetContent<T>(args: IResult<T>): IHttpResult<T> {
  return success(args, StatusCodes.RESET_CONTENT);
}

export function partialContent<T>(args: IResult<T>): IHttpResult<T> {
  return success(args, StatusCodes.PARTIAL_CONTENT);
}

export function multiStatus<T>(args: IResult<T>): IHttpResult<T> {
  return success(args, StatusCodes.MULTI_STATUS);
}