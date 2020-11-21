import { StatusCodes } from "http-status-codes";
import { i_http_result, i_url } from "../types";

function redirection(args: i_url, code: number): i_http_result<i_url> {
    const  { url } = args;
    if(!url) throw new Error("url must be defined")
    return {
        code,
        payload: {
            url
        },
        error: undefined
    }
}

export function multiple_choices(args: i_url): i_http_result<i_url> {
    return redirection(args, StatusCodes.MULTIPLE_CHOICES)
}

export function moved_permanently(args: i_url): i_http_result<i_url> {
    return redirection(args, StatusCodes.MOVED_PERMANENTLY)
}

export function moved_temporarily(args: i_url): i_http_result<i_url> {
    return redirection(args, StatusCodes.MOVED_TEMPORARILY)
}

export function see_other(args: i_url): i_http_result<i_url> {
    return redirection(args, StatusCodes.SEE_OTHER)
}

export function not_modified(args: i_url): i_http_result<i_url> {
    return redirection(args, StatusCodes.NOT_MODIFIED)
}

export function use_proxy(args: i_url): i_http_result<i_url> {
    return redirection(args, StatusCodes.USE_PROXY)
}

export function temporary_redirect(args: i_url): i_http_result<i_url> {
    return redirection(args, StatusCodes.TEMPORARY_REDIRECT)
}

export function permanent_redirect(args: i_url): i_http_result<i_url> {
    return redirection(args, StatusCodes.PERMANENT_REDIRECT)
}