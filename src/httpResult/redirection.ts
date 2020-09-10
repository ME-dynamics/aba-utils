import { StatusCodes } from "http-status-codes";
import { IHttpResult, IResult, IUrl } from "../types";

export function movedPermanently(args: IUrl): IHttpResult<IUrl> {
    const  { url, title } = args;
    return {
        code: StatusCodes.MOVED_PERMANENTLY,
        payload: {
            title,
            url
        }
    }
}

export function movedTemporarily(args: IUrl): IHttpResult<IUrl> {
    const  { url, title } = args;
    return {
        code: StatusCodes.MOVED_TEMPORARILY,
        payload: {
            title,
            url
        }
    }
}

