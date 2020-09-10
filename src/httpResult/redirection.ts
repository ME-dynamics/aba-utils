import { StatusCodes } from "http-status-codes";
import { IHttpResult, IUrl } from "../types";

function redirection(args: IUrl, code: number): IHttpResult<IUrl> {
    const  { url } = args;
    return {
        code,
        payload: {
            url
        }
    }
}

export function multipleChoices(args: IUrl): IHttpResult<IUrl> {
    return redirection(args, StatusCodes.MULTIPLE_CHOICES)
}

export function movedPermenantly(args: IUrl): IHttpResult<IUrl> {
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