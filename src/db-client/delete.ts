
import { Error_Factory } from "../../index";
import { i_build_client, i_query_exec, t_result_set } from "../types";



/**
 ** builds delete function for deleting rows in database
 * @param args an object than contains a client instance of cassandra driver
 * @returns  async function delete 
 */
export function build_delete(args: i_build_client) {
  const { client } = args;
  /**
   ** delete function uses db client to delete database rows 
   * @param info an object containing query string, params object and error path in code
   * @returns scylla db result set 
   */
  return async function db_delete(info: i_query_exec): Promise<t_result_set> {
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
