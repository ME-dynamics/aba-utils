import { IHttpResult, IResult, IUrl } from "../types";

export function result<T>(args: IResult<T>): IResult<T> {
    return {
        success: args.success,
        payload: args.payload,
        error: args.error
    }
}