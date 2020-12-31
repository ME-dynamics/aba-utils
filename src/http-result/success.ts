import { StatusCodes } from "http-status-codes";
import { i_payload_result, i_payload } from "../types";


/**
 ** general function for success http result 
 * @param args an object containing payload object
 * @param code http status code number
 * @returns an object containing code number and payload
 */
function success<T>(args: i_payload<T>, code: number): i_payload_result<T> {
  const { payload } = args;
  if (!payload) throw new Error("payload must be defined in ok status code");
  return {
    code,
    payload,
  };
}

/**
 ** ok  
 * @param args an object containing payload object
 * @returns an object containing code number and payload
 */
export function ok<T>(args: i_payload<T>): i_payload_result<T> {
  return success(args, StatusCodes.OK);
}

/**
 ** created  
 * @param args an object containing payload object
 * @returns an object containing code number and payload
 */
export function created<T>(args: i_payload<T>): i_payload_result<T> {
  return success(args, StatusCodes.CREATED);
}

/**
 ** no content  
 * @param args an object containing payload object
 * @returns an object containing code number and payload
 */
export function no_content<T>(args: i_payload<T>): i_payload_result<T> {
  return success(args, StatusCodes.NO_CONTENT);
}



/**
 ** accepted  
 * @param args an object containing payload object
 * @returns an object containing code number and payload
 */
export function accepted<T>(args: i_payload<T>): i_payload_result<T> {
  return success(args, StatusCodes.ACCEPTED);
}

/**
 ** non authoritative information  
 * @param args an object containing payload object
 * @returns an object containing code number and payload
 */
export function non_authoritative_information<T>(
  args: i_payload<T>
): i_payload_result<T> {
  return success(args, StatusCodes.NON_AUTHORITATIVE_INFORMATION);
}

/**
 ** reset content  
 * @param args an object containing payload object
 * @returns an object containing code number and payload
 */
export function reset_content<T>(args: i_payload<T>): i_payload_result<T> {
  return success(args, StatusCodes.RESET_CONTENT);
}

/**
 ** partial content  
 * @param args an object containing payload object
 * @returns an object containing code number and payload
 */
export function partial_content<T>(args: i_payload<T>): i_payload_result<T> {
  return success(args, StatusCodes.PARTIAL_CONTENT);
}

/**
 ** multi status  
 * @param args an object containing payload object
 * @returns an object containing code number and payload
 */
export function multi_status<T>(args: i_payload<T>): i_payload_result<T> {
  return success(args, StatusCodes.MULTI_STATUS);
}
