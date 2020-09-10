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

export function movedPermenantly(args: IUrl): IHttpResult<IUrl> {
    return redirection(args, StatusCodes.MOVED_PERMANENTLY)
}

