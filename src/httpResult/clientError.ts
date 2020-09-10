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

export function forbidden<T>(args: IResult<T>): IHttpResult<T> {
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

export function conflict<T>(args: IResult<T>): IHttpResult<T> {
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

export function insufficientSpaceOnResource<T>(args: IResult<T>): IHttpResult<T> {
  return clientError(args, StatusCodes.INSUFFICIENT_SPACE_ON_RESOURCE);
}

export function methodFailure<T>(args: IResult<T>): IHttpResult<T> {
  return clientError(args, StatusCodes.METHOD_FAILURE);
}

export function unprocessableEntity<T>(args: IResult<T>): IHttpResult<T> {
  return clientError(args, StatusCodes.UNPROCESSABLE_ENTITY);
}

export function locked<T>(args: IResult<T>): IHttpResult<T> {
  return clientError(args, StatusCodes.LOCKED);
}

export function failedDependency<T>(args: IResult<T>): IHttpResult<T> {
  return clientError(args, StatusCodes.FAILED_DEPENDENCY);
}

export function preconditionRequired<T>(args: IResult<T>): IHttpResult<T> {
  return clientError(args, StatusCodes.PRECONDITION_REQUIRED);
}

export function tooManyRequests<T>(args: IResult<T>): IHttpResult<T> {
  return clientError(args, StatusCodes.TOO_MANY_REQUESTS);
}

export function requestHeaderFieldsTooLarge<T>(args: IResult<T>): IHttpResult<T> {
  return clientError(args, StatusCodes.REQUEST_HEADER_FIELDS_TOO_LARGE);
}

export function unavailableForLegalReasons<T>(args: IResult<T>): IHttpResult<T> {
  return clientError(args, StatusCodes.UNAVAILABLE_FOR_LEGAL_REASONS);
}