
import { ErrorFactory } from "../..";
import { IBuildClient, IUpsert, TResultSet } from "../types";

export function buildDelete(args: IBuildClient) {
  const { client } = args;
  return async function dbDelete(info: IUpsert): Promise<TResultSet> {
    const { query, params, errorPath } = info;
    try {
      const result = await client.execute(query, params, { prepare: true });
      return result;
    } catch (error) {
      throw new ErrorFactory({
        name: "queryDeleteFailed",
        message: "problem in executing query",
        detail: `query: ${query}, params: ${params} failed to execute`,
        path: errorPath,
        nativeError: error,
      });
    }
  };
}
