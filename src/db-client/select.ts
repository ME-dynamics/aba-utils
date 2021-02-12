import { i_build_db_func, i_select, t_result_set } from "../types";
import { Error_Factory } from "../../index";


/**
 ** builds select function for selecting rows, also check uniqueness if needed
 * @param args an object than contains a client instance of cassandra driver
 * @returns  async function upsert 
 */
export function build_select(args: i_build_db_func) {
  const { client } = args;
  /**
   ** select rows from db using client, if row needs to be unique, it will
   ** check uniqueness. meaning there should be only one result per query ( for each partition key )
   ** if not will result and Error Factory.
   * !remember if this happens in code. it's a design flaw and should be
   * !fixed immediately. must be caught on testing   
   * @param info an object containing query string, params, unique and error path
   * @returns scylla db result set 
   */
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
