import { StatusCodes } from "http-status-codes";
import { IHttpResult, IResult, IUrl } from "../types";

function clientError<T>(args: IResult<T>, code: number): IHttpResult<T> {
  const { error } = args;
  return {
    code,
    error
  };
}

export function badRequest<T>(args: IResult<T>): IHttpResult<T> {
  return clientError(args, StatusCodes.BAD_REQUEST);
}