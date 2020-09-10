import { StatusCodes } from "http-status-codes";
import { IHttpResult, IUrl } from "../types";

function redirection(args: IUrl, code: number): IHttpResult<IUrl> {
    const  { url, title } = args;
    return {
        code,
        payload: {
            title,
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

