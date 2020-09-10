import { StatusCodes } from "http-status-codes";
import { IHttpResult, IResult, IUrl } from "../types";


function serverError<T>(args: IResult<T>, code: number): IHttpResult<T> {
    const { error } = args;
    if (!error) throw new Error("error must be defined")
    return {
      code,
      error
    };
}

export function internalServerError<T>(args: IResult<T>): IHttpResult<T> {
    return serverError(args, StatusCodes.INTERNAL_SERVER_ERROR);
}

export function notImplemented<T>(args: IResult<T>): IHttpResult<T> {
    return serverError(args, StatusCodes.NOT_IMPLEMENTED);
}

export function badGateway<T>(args: IResult<T>): IHttpResult<T> {
    return serverError(args, StatusCodes.BAD_GATEWAY);
}

