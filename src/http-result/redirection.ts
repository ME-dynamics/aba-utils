import { StatusCodes } from "http-status-codes";
import { i_payload_result, i_url } from "../types";


/**
 ** general function for redirection
 * @param args an object containing a url string 
 * @param code http status number
 * @returns an object containing code number, and payload object ( with url key )
 */
function redirection(args: i_url, code: number): i_payload_result<i_url> {
    const  { url } = args;
    if(!url) throw new Error("url must be defined")
    return {
        code,
        payload: {
            url
        },
    }
}

/**
 ** multiple choices
 * @param args an object containing a url string 
 * @returns an object containing code number, and payload object ( with url key )
 */
export function multiple_choices(args: i_url): i_payload_result<i_url> {
    return redirection(args, StatusCodes.MULTIPLE_CHOICES)
}

/**
 ** moved permanently
 * @param args an object containing a url string 
 * @returns an object containing code number, and payload object ( with url key )
 */
export function moved_permanently(args: i_url): i_payload_result<i_url> {
    return redirection(args, StatusCodes.MOVED_PERMANENTLY)
}

/**
 ** moved temporarily
 * @param args an object containing a url string 
 * @returns an object containing code number, and payload object ( with url key )
 */
export function moved_temporarily(args: i_url): i_payload_result<i_url> {
    return redirection(args, StatusCodes.MOVED_TEMPORARILY)
}

/**
 ** see other
 * @param args an object containing a url string 
 * @returns an object containing code number, and payload object ( with url key )
 */
export function see_other(args: i_url): i_payload_result<i_url> {
    return redirection(args, StatusCodes.SEE_OTHER)
}

/**
 ** not modified
 * @param args an object containing a url string 
 * @returns an object containing code number, and payload object ( with url key )
 */
export function not_modified(args: i_url): i_payload_result<i_url> {
    return redirection(args, StatusCodes.NOT_MODIFIED)
}

// export function use_proxy(args: i_url): i_payload_result<i_url> {
//     return redirection(args, StatusCodes.USE_PROXY)
// }

/**
 ** temporary redirect
 * @param args an object containing a url string 
 * @returns an object containing code number, and payload object ( with url key )
 */
export function temporary_redirect(args: i_url): i_payload_result<i_url> {
    return redirection(args, StatusCodes.TEMPORARY_REDIRECT)
}
/**
 ** permanent redirect
 * @param args an object containing a url string 
 * @returns an object containing code number, and payload object ( with url key )
 */
export function permanent_redirect(args: i_url): i_payload_result<i_url> {
    return redirection(args, StatusCodes.PERMANENT_REDIRECT)
}