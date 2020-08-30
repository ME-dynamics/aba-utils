import { created, noContent, ok } from "./success"


// TODO: return redirection, client error, server error

export const httpResult = {
    success: {
        ok,
        noContent,
        created
    }
}



// export function result<T>(args: IResult<T>): IResult<T> {
//     return {
//         success: args.success,
//         payload: args.payload,
//         error: args.error
//     }
// }