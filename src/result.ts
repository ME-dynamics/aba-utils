import { i_result } from "./types"

export function result<T>(args: i_result<T>): i_result<T> {
    return {
        success: args.success,
        payload: args.payload,
        error: args.error
    }
}
