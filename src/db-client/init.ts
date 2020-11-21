import { error_factory } from "../../index";
import { i_build_client, i_init, t_result_set } from "../types";

export function build_init(args: i_build_client) {
  const { client } = args;
  return async function init(info: i_init): Promise<t_result_set> {
    const { query, error_path } = info;
    try {
      const result = await client.execute(query, undefined, { prepare: true });
      return result;
    } catch (error) {
      throw new error_factory({
        name: "query_init_failed",
        message: "problem in executing query",
        detail: `query: ${query} failed to execute`,
        path: error_path,
        native_error: error,
      });
    }
  };
}
