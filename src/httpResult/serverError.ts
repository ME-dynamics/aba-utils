import { StatusCodes } from "http-status-codes";
import { IHttpResult, IHttp } from "../types";


function serverError<T>(args: IHttp<T>, code: number): IHttpResult<T> {
    const { error } = args;
    if (!error) throw new Error("error must be defined")
    return {
      code,
      payload: undefined,
      error
    };
}

export function internalServerError<T>(args: IHttp<T>): IHttpResult<T> {
    return serverError(args, StatusCodes.INTERNAL_SERVER_ERROR);
}

export function notImplemented<T>(args: IHttp<T>): IHttpResult<T> {
    return serverError(args, StatusCodes.NOT_IMPLEMENTED);
}

export function badGateway<T>(args: IHttp<T>): IHttpResult<T> {
    return serverError(args, StatusCodes.BAD_GATEWAY);
}

export function serviceUnavailable<T>(args: IHttp<T>): IHttpResult<T> {
    return serverError(args, StatusCodes.SERVICE_UNAVAILABLE);
}

export function gatewayTimeout<T>(args: IHttp<T>): IHttpResult<T> {
    return serverError(args, StatusCodes.GATEWAY_TIMEOUT);
}

export function httpVersionNotSupported<T>(args: IHttp<T>): IHttpResult<T> {
    return serverError(args, StatusCodes.HTTP_VERSION_NOT_SUPPORTED);
}

export function insufficientStorage<T>(args: IHttp<T>): IHttpResult<T> {
    return serverError(args, StatusCodes.INSUFFICIENT_STORAGE);
}

export function networkAuthenticationRequired<T>(args: IHttp<T>): IHttpResult<T> {
    return serverError(args, StatusCodes.NETWORK_AUTHENTICATION_REQUIRED);
}