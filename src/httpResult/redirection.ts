import { StatusCodes } from "http-status-codes";
import { IHttpResult, IResult } from "../types";

interface IUrl {
    title: string;
    url : string;
} //  TODO, alireza: move this to types 



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
