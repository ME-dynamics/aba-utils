import { StatusCodes } from "http-status-codes";
import { IHttpResult, IResult } from "../types";

function clientError<T>(args: IResult<T>, code: number): IHttpResult<T> {
  const { error } = args;
  if(!error) throw new Error("error must be defined")
  return {
    code,
    error
  };
}

export function badRequest<T>(args: IResult<T>): IHttpResult<T> {
  return clientError(args, StatusCodes.BAD_REQUEST);
}

export function unauthorized<T>(args: IResult<T>): IHttpResult<T> {
  return clientError(args, StatusCodes.UNAUTHORIZED);
}

export function paymentRequired<T>(args: IResult<T>): IHttpResult<T> {
  return clientError(args, StatusCodes.PAYMENT_REQUIRED);
}

export function بorbidden<T>(args: IResult<T>): IHttpResult<T> {
  return clientError(args, StatusCodes.FORBIDDEN);
}

export function notFound<T>(args: IResult<T>): IHttpResult<T> {
  return clientError(args, StatusCodes.NOT_FOUND);
}

export function methodNotAllowed<T>(args: IResult<T>): IHttpResult<T> {
  return clientError(args, StatusCodes.METHOD_NOT_ALLOWED);
}

export function notAcceptable<T>(args: IResult<T>): IHttpResult<T> {
  return clientError(args, StatusCodes.NOT_ACCEPTABLE);
}

export function proxyAuthenticationRequired<T>(args: IResult<T>): IHttpResult<T> {
  return clientError(args, StatusCodes.PROXY_AUTHENTICATION_REQUIRED);
}

export function requestTimeout<T>(args: IResult<T>): IHttpResult<T> {
  return clientError(args, StatusCodes.REQUEST_TIMEOUT);
}

export function Conflict<T>(args: IResult<T>): IHttpResult<T> {
  return clientError(args, StatusCodes.CONFLICT);
}

export function gone<T>(args: IResult<T>): IHttpResult<T> {
  return clientError(args, StatusCodes.GONE);
}

export function lengthRequired<T>(args: IResult<T>): IHttpResult<T> {
  return clientError(args, StatusCodes.LENGTH_REQUIRED);
}

export function preconditionFailed<T>(args: IResult<T>): IHttpResult<T> {
  return clientError(args, StatusCodes.PRECONDITION_FAILED);
}

export function requestEntityTooLarge<T>(args: IResult<T>): IHttpResult<T> {
  return clientError(args, StatusCodes.REQUEST_TOO_LONG);
}

export function requestURITooLong<T>(args: IResult<T>): IHttpResult<T> {
  return clientError(args, StatusCodes.REQUEST_URI_TOO_LONG);
}

export function unsupportedMediaType<T>(args: IResult<T>): IHttpResult<T> {
  return clientError(args, StatusCodes.UNSUPPORTED_MEDIA_TYPE);
}

export function requestedRangeNotSatisfiable<T>(args: IResult<T>): IHttpResult<T> {
  return clientError(args, StatusCodes.REQUESTED_RANGE_NOT_SATISFIABLE);
}

export function expectationFailed<T>(args: IResult<T>): IHttpResult<T> {
  return clientError(args, StatusCodes.EXPECTATION_FAILED);
}

export function ImATeapot<T>(args: IResult<T>): IHttpResult<T> {
  return clientError(args, StatusCodes.IM_A_TEAPOT);
}