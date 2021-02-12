import { Error_Factory } from "../../index";
import { i_build_db_func, i_init, t_result_set } from "../types";




/**
 ** builds init function for initializing tables, UDTs etc
 * @param args an object than contains a client instance of cassandra driver
 * @returns  async function upsert 
 */
export function build_init(args: i_build_db_func) {
  const { client } = args;
  /**
   ** execute initialization statements
   * @param info object containing initialize query and error path
   * @returns scylla db result set
   */
  return async function init(info: i_init): Promise<t_result_set> {
    const { query, error_path } = info;
    try {
      const result = await client.execute(query, undefined, { prepare: true });
      return result;
    } catch (error) {
      throw new Error_Factory({
        name: "query_init_failed",
        message: "problem in executing query",
        detail: `query: ${query} failed to execute`,
        path: error_path,
        native_error: error,
      });
    }
  };
}
