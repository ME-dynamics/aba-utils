import { StatusCodes } from "http-status-codes";
import { i_error_result, i_req_error } from "../types";

/**
 ** general function for server error 
 * @param args 
 * @param code 
 * @returns an object containing code number and error string
 */
function server_error(args: i_req_error, code: number): i_error_result {
    const { error } = args;
    if (!error) throw new Error("error must be defined")
    return {
      code,
      error
    };
}


/**
 ** internal server error 
 * @param args 
 * @returns an object containing code number and error string
 */
export function internal_server_error(args: i_req_error): i_error_result {
    return server_error(args, StatusCodes.INTERNAL_SERVER_ERROR);
}


/**
 ** not implemented 
 * @param args 
 * @returns an object containing code number and error string
 */
export function not_implemented(args: i_req_error): i_error_result {
    return server_error(args, StatusCodes.NOT_IMPLEMENTED);
}

/**
 ** bad gateway 
 * @param args 
 * @returns an object containing code number and error string
 */
export function bad_gateway(args: i_req_error): i_error_result {
    return server_error(args, StatusCodes.BAD_GATEWAY);
}

/**
 ** service unavailable 
 * @param args 
 * @returns an object containing code number and error string
 */
export function service_unavailable(args: i_req_error): i_error_result {
    return server_error(args, StatusCodes.SERVICE_UNAVAILABLE);
}

/**
 ** gateway timeout
 * @param args 
 * @returns an object containing code number and error string
 */
export function gateway_timeout(args: i_req_error): i_error_result {
    return server_error(args, StatusCodes.GATEWAY_TIMEOUT);
}

/**
 ** http version not supported 
 * @param args 
 * @returns an object containing code number and error string
 */
export function http_version_not_supported(args: i_req_error): i_error_result {
    return server_error(args, StatusCodes.HTTP_VERSION_NOT_SUPPORTED);
}


/**
 ** insufficient storage 
 * @param args 
 * @returns an object containing code number and error string
 */
export function insufficient_storage(args: i_req_error): i_error_result {
    return server_error(args, StatusCodes.INSUFFICIENT_STORAGE);
}

/**
 ** network authentication required 
 * @param args 
 * @returns an object containing code number and error string
 */
export function network_authentication_required(args: i_req_error): i_error_result {
    return server_error(args, StatusCodes.NETWORK_AUTHENTICATION_REQUIRED);
}