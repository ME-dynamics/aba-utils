import { StatusCodes } from "http-status-codes";
import { i_error_result, i_req_error } from "../types";

/**
 ** general function for http client error
 * @param args an object that contains request error text
 * @param code http status code
 * @returns an object containing error number and error string
 */
function client_error(args: i_req_error, code: number): i_error_result {
  const { error } = args;
  if (!error) throw new Error("error must be defined");
  return {
    code,
    error,
  };
}

/**
 ** bad request
 * @param args an object that contains request error text
 * @returns an object containing error number and error string
 */
export function bad_request(args: i_req_error): i_error_result {
  return client_error(args, StatusCodes.BAD_REQUEST);
}

/**
 ** unauthorized
 * @param args an object that contains request error text
 * @returns an object containing error number and error string
 */
export function unauthorized(args: i_req_error): i_error_result {
  return client_error(args, StatusCodes.UNAUTHORIZED);
}

/**
 ** payment required
 * @param args an object that contains request error text
 * @returns an object containing error number and error string
 */
export function payment_required(args: i_req_error): i_error_result {
  return client_error(args, StatusCodes.PAYMENT_REQUIRED);
}

/**
 ** forbidden
 * @param args an object that contains request error text
 * @returns an object containing error number and error string
 */
export function forbidden(args: i_req_error): i_error_result {
  return client_error(args, StatusCodes.FORBIDDEN);
}

/**
 ** not found
 * @param args an object that contains request error text
 * @returns an object containing error number and error string
 */
export function not_found(args: i_req_error): i_error_result {
  return client_error(args, StatusCodes.NOT_FOUND);
}

/**
 ** method not allowed
 * @param args an object that contains request error text
 * @returns an object containing error number and error string
 */
export function method_not_allowed(args: i_req_error): i_error_result {
  return client_error(args, StatusCodes.METHOD_NOT_ALLOWED);
}

/**
 ** not acceptable
 * @param args an object that contains request error text
 * @returns an object containing error number and error string
 */

export function not_acceptable(args: i_req_error): i_error_result {
  return client_error(args, StatusCodes.NOT_ACCEPTABLE);
}

/**
 ** proxy authentication required
 * @param args an object that contains request error text
 * @returns an object containing error number and error string
 */
export function proxy_authentication_required(
  args: i_req_error
): i_error_result {
  return client_error(args, StatusCodes.PROXY_AUTHENTICATION_REQUIRED);
}

/**
 ** request timeout
 * @param args an object that contains request error text
 * @returns an object containing error number and error string
 */
export function request_timeout(args: i_req_error): i_error_result {
  return client_error(args, StatusCodes.REQUEST_TIMEOUT);
}

/**
 ** conflict
 * @param args an object that contains request error text
 * @returns an object containing error number and error string
 */

export function conflict(args: i_req_error): i_error_result {
  return client_error(args, StatusCodes.CONFLICT);
}

/**
 ** gone
 * @param args an object that contains request error text
 * @returns an object containing error number and error string
 */
export function gone(args: i_req_error): i_error_result {
  return client_error(args, StatusCodes.GONE);
}

/**
 ** length required
 * @param args an object that contains request error text
 * @returns an object containing error number and error string
 */
export function length_required(args: i_req_error): i_error_result {
  return client_error(args, StatusCodes.LENGTH_REQUIRED);
}

/**
 ** precondition failed
 * @param args an object that contains request error text
 * @returns an object containing error number and error string
 */
export function precondition_failed(args: i_req_error): i_error_result {
  return client_error(args, StatusCodes.PRECONDITION_FAILED);
}

/**
 ** request entity too large
 * @param args an object that contains request error text
 * @returns an object containing error number and error string
 */
export function request_entity_too_large(args: i_req_error): i_error_result {
  return client_error(args, StatusCodes.REQUEST_TOO_LONG);
}


/**
 ** request uri too long
 * @param args an object that contains request error text
 * @returns an object containing error number and error string
 */
export function request_uri_too_long(args: i_req_error): i_error_result {
  return client_error(args, StatusCodes.REQUEST_URI_TOO_LONG);
}

/**
 ** unsupported media type
 * @param args an object that contains request error text
 * @returns an object containing error number and error string
 */
export function unsupported_media_type(args: i_req_error): i_error_result {
  return client_error(args, StatusCodes.UNSUPPORTED_MEDIA_TYPE);
}

/**
 ** requested range not satisfiable
 * @param args an object that contains request error text
 * @returns an object containing error number and error string
 */
export function requested_range_not_satisfiable(
  args: i_req_error
): i_error_result {
  return client_error(args, StatusCodes.REQUESTED_RANGE_NOT_SATISFIABLE);
}

/**
 ** expectation failed
 * @param args an object that contains request error text
 * @returns an object containing error number and error string
 */
export function expectation_failed(args: i_req_error): i_error_result {
  return client_error(args, StatusCodes.EXPECTATION_FAILED);
}

/**
 ** im a teapot
 * @param args an object that contains request error text
 * @returns an object containing error number and error string
 */
export function im_a_teapot(args: i_req_error): i_error_result {
  return client_error(args, StatusCodes.IM_A_TEAPOT);
}

/**
 ** insufficient space on resource
 * @param args an object that contains request error text
 * @returns an object containing error number and error string
 */
export function insufficient_space_on_resource(
  args: i_req_error
): i_error_result {
  return client_error(args, StatusCodes.INSUFFICIENT_SPACE_ON_RESOURCE);
}

// export function method_failure(args: i_req_error): i_error_result {
//   return client_error(args, StatusCodes.METHOD_FAILURE);
// }

/**
 ** un_processable entity
 * @param args an object that contains request error text
 * @returns an object containing error number and error string
 */
export function un_processable_entity(args: i_req_error): i_error_result {
  return client_error(args, StatusCodes.UNPROCESSABLE_ENTITY);
}

/**
 ** locked
 * @param args an object that contains request error text
 * @returns an object containing error number and error string
 */
export function locked(args: i_req_error): i_error_result {
  return client_error(args, StatusCodes.LOCKED);
}

/**
 ** failed dependency
 * @param args an object that contains request error text
 * @returns an object containing error number and error string
 */
export function failed_dependency(args: i_req_error): i_error_result {
  return client_error(args, StatusCodes.FAILED_DEPENDENCY);
}

/**
 ** precondition required
 * @param args an object that contains request error text
 * @returns an object containing error number and error string
 */
export function precondition_required(args: i_req_error): i_error_result {
  return client_error(args, StatusCodes.PRECONDITION_REQUIRED);
}

/**
 ** too many requests
 * @param args an object that contains request error text
 * @returns an object containing error number and error string
 */
export function too_many_requests(args: i_req_error): i_error_result {
  return client_error(args, StatusCodes.TOO_MANY_REQUESTS);
}

/**
 ** request header fields too large
 * @param args an object that contains request error text
 * @returns an object containing error number and error string
 */
export function request_header_fields_too_large(
  args: i_req_error
): i_error_result {
  return client_error(args, StatusCodes.REQUEST_HEADER_FIELDS_TOO_LARGE);
}

/**
 ** unavailable for legal reasons
 * @param args an object that contains request error text
 * @returns an object containing error number and error string
 */
export function unavailable_for_legal_reasons(
  args: i_req_error
): i_error_result {
  return client_error(args, StatusCodes.UNAVAILABLE_FOR_LEGAL_REASONS);
}
