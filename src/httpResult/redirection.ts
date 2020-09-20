import { StatusCodes } from "http-status-codes";
import { IHttpResult, IUrl } from "../types";

function redirection(args: IUrl, code: number): IHttpResult<IUrl> {
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

export function multipleChoices(args: IUrl): IHttpResult<IUrl> {
    return redirection(args, StatusCodes.MULTIPLE_CHOICES)
}

export function movedPermanently(args: IUrl): IHttpResult<IUrl> {
    return redirection(args, StatusCodes.MOVED_PERMANENTLY)
}

export function movedTemporarily(args: IUrl): IHttpResult<IUrl> {
    return redirection(args, StatusCodes.MOVED_TEMPORARILY)
}

export function seeOther(args: IUrl): IHttpResult<IUrl> {
    return redirection(args, StatusCodes.SEE_OTHER)
}

export function notModified(args: IUrl): IHttpResult<IUrl> {
    return redirection(args, StatusCodes.NOT_MODIFIED)
}

export function useProxy(args: IUrl): IHttpResult<IUrl> {
    return redirection(args, StatusCodes.USE_PROXY)
}

export function temporaryRedirect(args: IUrl): IHttpResult<IUrl> {
    return redirection(args, StatusCodes.TEMPORARY_REDIRECT)
}

export function permanentRedirect(args: IUrl): IHttpResult<IUrl> {
    return redirection(args, StatusCodes.PERMANENT_REDIRECT)
}