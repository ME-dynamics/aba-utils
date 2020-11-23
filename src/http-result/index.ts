import {
  created,
  accepted,
  multi_status,
  no_content,
  non_authoritative_information,
  ok,
  partial_content,
  reset_content,
} from "./success";
import {
  bad_request,
  conflict,
  expectation_failed,
  failed_dependency,
  forbidden,
  gone,
  im_a_teapot,
  insufficient_space_on_resource,
  length_required,
  locked,
  method_not_allowed,
  not_acceptable,
  not_found,
  payment_required,
  precondition_failed,
  precondition_required,
  proxy_authentication_required,
  request_entity_too_large,
  request_header_fields_too_large,
  request_timeout,
  request_uri_too_long,
  requested_range_not_satisfiable,
  too_many_requests,
  un_processable_entity,
  unauthorized,
  unavailable_for_legal_reasons,
  unsupported_media_type,
} from "./client_error";
import {
  bad_gateway,
  gateway_timeout,
  http_version_not_supported,
  insufficient_storage,
  internal_server_error,
  network_authentication_required,
  not_implemented,
  service_unavailable,
} from "./server_error";
import {
  moved_permanently,
  moved_temporarily,
  multiple_choices,
  not_modified,
  permanent_redirect,
  see_other,
  temporary_redirect,
} from "./redirection";

export const http_result = {
  success: {
    created,
    accepted,
    multi_status,
    no_content,
    non_authoritative_information,
    ok,
    partial_content,
    reset_content,
  },
  redirection: {
    moved_permanently,
    moved_temporarily,
    multiple_choices,
    not_modified,
    permanent_redirect,
    see_other,
    temporary_redirect,
  },
  server_error: {
    bad_gateway,
    gateway_timeout,
    http_version_not_supported,
    insufficient_storage,
    internal_server_error,
    network_authentication_required,
    not_implemented,
    service_unavailable,
  },
  client_error: {
    bad_request,
    conflict,
    expectation_failed,
    failed_dependency,
    forbidden,
    gone,
    im_a_teapot,
    insufficient_space_on_resource,
    length_required,
    locked,
    method_not_allowed,
    not_acceptable,
    not_found,
    payment_required,
    precondition_failed,
    precondition_required,
    proxy_authentication_required,
    request_entity_too_large,
    request_header_fields_too_large,
    request_timeout,
    request_uri_too_long,
    requested_range_not_satisfiable,
    too_many_requests,
    un_processable_entity,
    unauthorized,
    unavailable_for_legal_reasons,
    unsupported_media_type,
  },
};
