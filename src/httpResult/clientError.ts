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

export function Forbidden<T>(args: IResult<T>): IHttpResult<T> {
  return clientError(args, StatusCodes.FORBIDDEN);
}

export function notFound<T>(args: IResult<T>): IHttpResult<T> {
  return clientError(args, StatusCodes.NOT_FOUND);
}