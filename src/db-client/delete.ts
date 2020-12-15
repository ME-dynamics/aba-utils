
import { Error_Factory } from "../../index";
import { i_build_client, i_upsert, t_result_set } from "../types";

export function build_delete(args: i_build_client) {
  const { client } = args;
  return async function db_delete(info: i_upsert): Promise<t_result_set> {
    const { query, params, error_path } = info;
    try {
      const result = await client.execute(query, params, { prepare: true });
      return result;
    } catch (error) {
      throw new Error_Factory({
        name: "query_delete_failed",
        message: "problem in executing query",
        detail: `query: ${query}, params: ${params} failed to execute`,
        path: error_path,
        native_error: error,
      });
    }
  };
}
