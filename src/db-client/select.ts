import { i_build_client, i_select, t_result_set } from "../types";
import { Error_Factory } from "../../index";

/**
 * wrapper around client.execute for cassandra driver
 * also checks uniqueness if needed
 * @param args
 */
export function build_select(args: i_build_client) {
  const { client } = args;

  return async function select(info: i_select): Promise<t_result_set> {
    const { query, params, unique, error_path } = info;
    try {
      const result = await client.execute(query, params, { prepare: true });
      // check if row is unique
      if (unique && result.rowLength > 1) {
        throw new Error_Factory({
          name: "row_must_be_unique",
          message: "results should contain only one row",
          detail: `results: ${result.rows.toString()}, must be dealt with immediately. query: ${query}
             , params: ${params}, info: ${result.info}`,
          path: error_path,
          native_error: undefined,
        });
      }
      return result;
    } catch (error) {
      throw new Error_Factory({
        name: "query_select_failed",
        message: "problem in executing query",
        detail: `query: ${query}, params: ${params} failed to execute`,
        path: error_path,
        native_error: error,
      });
    }
  };
}
