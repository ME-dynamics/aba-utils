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