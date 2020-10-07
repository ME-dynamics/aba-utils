import { IBuildClient, ISelect, TResultSet } from "../types";
import { ErrorFactory } from "../../";

/**
 * wrapper around client.execute for cassandra driver
 * also checks uniqueness if needed
 * @param args
 */
export function buildSelect(args: IBuildClient) {
  const { client } = args;

  return async function select(info: ISelect): Promise<TResultSet> {
    const { query, params, unique, errorPath } = info;
    try {
      const result = await client.execute(query, params, { prepare: true });
      // check if row is unique
      if (unique && result.rowLength > 1) {
        throw new ErrorFactory({
          name: "rowMustBeUnique",
          message: "results should contain only one row",
          detail: `results: ${result.rows.toString()}, must be dealt with immediately. query: ${query}
             , params: ${params}, info: ${result.info}`,
          path: errorPath,
          nativeError: undefined,
        });
      }
      return result;
    } catch (error) {
      throw new ErrorFactory({
        name: "querySelectFailed",
        message: "problem in executing query",
        detail: `query: ${query}, params: ${params} failed to execute`,
        path: errorPath,
        nativeError: error,
      });
    }
  };
}
