import { StatusCodes } from "http-status-codes";
import { i_error_result, i_req_error } from "../types";

function client_error(args: i_req_error, code: number): i_error_result {
  const { error } = args;
  if (!error) throw new Error("error must be defined");
  return {
    code,
    error,
  };
}

export function bad_request(args: i_req_error): i_error_result {
  return client_error(args, StatusCodes.BAD_REQUEST);
}

export function unauthorized(args: i_req_error): i_error_result {
  return client_error(args, StatusCodes.UNAUTHORIZED);
}

export function payment_required(args: i_req_error): i_error_result {
  return client_error(args, StatusCodes.PAYMENT_REQUIRED);
}

export function forbidden(args: i_req_error): i_error_result {
  return client_error(args, StatusCodes.FORBIDDEN);
}

export function not_found(args: i_req_error): i_error_result {
  return client_error(args, StatusCodes.NOT_FOUND);
}

export function method_not_allowed(args: i_req_error): i_error_result {
  return client_error(args, StatusCodes.METHOD_NOT_ALLOWED);
}

export function not_acceptable(args: i_req_error): i_error_result {
  return client_error(args, StatusCodes.NOT_ACCEPTABLE);
}

export function proxy_authentication_required(
  args: i_req_error
): i_error_result {
  return client_error(args, StatusCodes.PROXY_AUTHENTICATION_REQUIRED);
}

export function request_timeout(args: i_req_error): i_error_result {
  return client_error(args, StatusCodes.REQUEST_TIMEOUT);
}

export function conflict(args: i_req_error): i_error_result {
  return client_error(args, StatusCodes.CONFLICT);
}

export function gone(args: i_req_error): i_error_result {
  return client_error(args, StatusCodes.GONE);
}

export function length_required(args: i_req_error): i_error_result {
  return client_error(args, StatusCodes.LENGTH_REQUIRED);
}

export function precondition_failed(args: i_req_error): i_error_result {
  return client_error(args, StatusCodes.PRECONDITION_FAILED);
}

export function request_entity_too_large(args: i_req_error): i_error_result {
  return client_error(args, StatusCodes.REQUEST_TOO_LONG);
}

export function request_uri_too_long(args: i_req_error): i_error_result {
  return client_error(args, StatusCodes.REQUEST_URI_TOO_LONG);
}

export function unsupported_media_type(args: i_req_error): i_error_result {
  return client_error(args, StatusCodes.UNSUPPORTED_MEDIA_TYPE);
}

export function requested_range_not_satisfiable(
  args: i_req_error
): i_error_result {
  return client_error(args, StatusCodes.REQUESTED_RANGE_NOT_SATISFIABLE);
}

export function expectation_failed(args: i_req_error): i_error_result {
  return client_error(args, StatusCodes.EXPECTATION_FAILED);
}

export function im_a_teapot(args: i_req_error): i_error_result {
  return client_error(args, StatusCodes.IM_A_TEAPOT);
}

export function insufficient_space_on_resource(
  args: i_req_error
): i_error_result {
  return client_error(args, StatusCodes.INSUFFICIENT_SPACE_ON_RESOURCE);
}

// export function method_failure(args: i_req_error): i_error_result {
//   return client_error(args, StatusCodes.METHOD_FAILURE);
// }

export function un_processable_entity(args: i_req_error): i_error_result {
  return client_error(args, StatusCodes.UNPROCESSABLE_ENTITY);
}

export function locked(args: i_req_error): i_error_result {
  return client_error(args, StatusCodes.LOCKED);
}

export function failed_dependency(args: i_req_error): i_error_result {
  return client_error(args, StatusCodes.FAILED_DEPENDENCY);
}

export function precondition_required(args: i_req_error): i_error_result {
  return client_error(args, StatusCodes.PRECONDITION_REQUIRED);
}

export function too_many_requests(args: i_req_error): i_error_result {
  return client_error(args, StatusCodes.TOO_MANY_REQUESTS);
}

export function request_header_fields_too_large(
  args: i_req_error
): i_error_result {
  return client_error(args, StatusCodes.REQUEST_HEADER_FIELDS_TOO_LARGE);
}

export function unavailable_for_legal_reasons(
  args: i_req_error
): i_error_result {
  return client_error(args, StatusCodes.UNAVAILABLE_FOR_LEGAL_REASONS);
}
