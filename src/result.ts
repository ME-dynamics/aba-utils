import { i_result } from "./types"



/**
 * general function to return results in one structure across code
 * for http results use http-result's functions
 * @param args an object containing success boolean, payload , error string
 */
export function result<T>(args: i_result<T>): i_result<T> {
    return {
        success: args.success,
        payload: args.payload,
        error: args.error
    }
}
