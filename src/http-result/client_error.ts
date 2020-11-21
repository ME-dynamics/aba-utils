import { StatusCodes } from "http-status-codes";
import { i_http_result, i_http } from "../types";

function client_error<T>(args: i_http<T>, code: number): i_http_result<T> {
  const { error } = args;
  if(!error) throw new Error("error must be defined")
  return {
    code,
    payload: undefined,
    error
  };
}

export function bad_request<T>(args: i_http<T>): i_http_result<T> {
  return client_error(args, StatusCodes.BAD_REQUEST);
}

export function unauthorized<T>(args: i_http<T>): i_http_result<T> {
  return client_error(args, StatusCodes.UNAUTHORIZED);
}

export function payment_required<T>(args: i_http<T>): i_http_result<T> {
  return client_error(args, StatusCodes.PAYMENT_REQUIRED);
}

export function forbidden<T>(args: i_http<T>): i_http_result<T> {
  return client_error(args, StatusCodes.FORBIDDEN);
}

export function not_found<T>(args: i_http<T>): i_http_result<T> {
  return client_error(args, StatusCodes.NOT_FOUND);
}

export function method_not_allowed<T>(args: i_http<T>): i_http_result<T> {
  return client_error(args, StatusCodes.METHOD_NOT_ALLOWED);
}

export function not_acceptable<T>(args: i_http<T>): i_http_result<T> {
  return client_error(args, StatusCodes.NOT_ACCEPTABLE);
}

export function proxy_authentication_required<T>(args: i_http<T>): i_http_result<T> {
  return client_error(args, StatusCodes.PROXY_AUTHENTICATION_REQUIRED);
}

export function request_timeout<T>(args: i_http<T>): i_http_result<T> {
  return client_error(args, StatusCodes.REQUEST_TIMEOUT);
}

export function conflict<T>(args: i_http<T>): i_http_result<T> {
  return client_error(args, StatusCodes.CONFLICT);
}

export function gone<T>(args: i_http<T>): i_http_result<T> {
  return client_error(args, StatusCodes.GONE);
}

export function length_required<T>(args: i_http<T>): i_http_result<T> {
  return client_error(args, StatusCodes.LENGTH_REQUIRED);
}

export function precondition_failed<T>(args: i_http<T>): i_http_result<T> {
  return client_error(args, StatusCodes.PRECONDITION_FAILED);
}

export function request_entity_too_large<T>(args: i_http<T>): i_http_result<T> {
  return client_error(args, StatusCodes.REQUEST_TOO_LONG);
}

export function request_uri_too_long<T>(args: i_http<T>): i_http_result<T> {
  return client_error(args, StatusCodes.REQUEST_URI_TOO_LONG);
}

export function unsupported_media_type<T>(args: i_http<T>): i_http_result<T> {
  return client_error(args, StatusCodes.UNSUPPORTED_MEDIA_TYPE);
}

export function requested_range_not_satisfiable<T>(args: i_http<T>): i_http_result<T> {
  return client_error(args, StatusCodes.REQUESTED_RANGE_NOT_SATISFIABLE);
}

export function expectation_failed<T>(args: i_http<T>): i_http_result<T> {
  return client_error(args, StatusCodes.EXPECTATION_FAILED);
}

export function im_a_teapot<T>(args: i_http<T>): i_http_result<T> {
  return client_error(args, StatusCodes.IM_A_TEAPOT);
}

export function insufficient_space_on_resource<T>(args: i_http<T>): i_http_result<T> {
  return client_error(args, StatusCodes.INSUFFICIENT_SPACE_ON_RESOURCE);
}

export function method_failure<T>(args: i_http<T>): i_http_result<T> {
  return client_error(args, StatusCodes.METHOD_FAILURE);
}

export function un_processable_entity<T>(args: i_http<T>): i_http_result<T> {
  return client_error(args, StatusCodes.UNPROCESSABLE_ENTITY);
}

export function locked<T>(args: i_http<T>): i_http_result<T> {
  return client_error(args, StatusCodes.LOCKED);
}

export function failed_dependency<T>(args: i_http<T>): i_http_result<T> {
  return client_error(args, StatusCodes.FAILED_DEPENDENCY);
}

export function precondition_required<T>(args: i_http<T>): i_http_result<T> {
  return client_error(args, StatusCodes.PRECONDITION_REQUIRED);
}

export function too_many_requests<T>(args: i_http<T>): i_http_result<T> {
  return client_error(args, StatusCodes.TOO_MANY_REQUESTS);
}

export function request_header_fields_too_large<T>(args: i_http<T>): i_http_result<T> {
  return client_error(args, StatusCodes.REQUEST_HEADER_FIELDS_TOO_LARGE);
}

export function unavailable_for_legal_reasons<T>(args: i_http<T>): i_http_result<T> {
  return client_error(args, StatusCodes.UNAVAILABLE_FOR_LEGAL_REASONS);
}