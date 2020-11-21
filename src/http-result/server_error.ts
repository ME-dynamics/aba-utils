import { StatusCodes } from "http-status-codes";
import { i_http_result, i_http } from "../types";


function server_error<T>(args: i_http<T>, code: number): i_http_result<T> {
    const { error } = args;
    if (!error) throw new Error("error must be defined")
    return {
      code,
      payload: undefined,
      error
    };
}

export function internal_server_error<T>(args: i_http<T>): i_http_result<T> {
    return server_error(args, StatusCodes.INTERNAL_SERVER_ERROR);
}

export function not_implemented<T>(args: i_http<T>): i_http_result<T> {
    return server_error(args, StatusCodes.NOT_IMPLEMENTED);
}

export function bad_gateway<T>(args: i_http<T>): i_http_result<T> {
    return server_error(args, StatusCodes.BAD_GATEWAY);
}

export function service_unavailable<T>(args: i_http<T>): i_http_result<T> {
    return server_error(args, StatusCodes.SERVICE_UNAVAILABLE);
}

export function gateway_timeout<T>(args: i_http<T>): i_http_result<T> {
    return server_error(args, StatusCodes.GATEWAY_TIMEOUT);
}

export function http_version_not_supported<T>(args: i_http<T>): i_http_result<T> {
    return server_error(args, StatusCodes.HTTP_VERSION_NOT_SUPPORTED);
}

export function insufficient_storage<T>(args: i_http<T>): i_http_result<T> {
    return server_error(args, StatusCodes.INSUFFICIENT_STORAGE);
}

export function network_authentication_required<T>(args: i_http<T>): i_http_result<T> {
    return server_error(args, StatusCodes.NETWORK_AUTHENTICATION_REQUIRED);
}