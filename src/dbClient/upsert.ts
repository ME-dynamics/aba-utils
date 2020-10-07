import { ErrorFactory } from "../..";
import { IBuildClient, IUpsert } from "../types";

export function buildUpsert(args: IBuildClient) {
  const { client } = args;
  return async function upsert(info: IUpsert) {
    const { query, params, errorPath } = info;
    try {
      const result = await client.execute(query, params, { prepare: true });
      return result ? true : false;
    } catch (error) {
      throw new ErrorFactory({
        name: "queryUpsertFailed",
        message: "problem in executing query",
        detail: `query: ${query}, params: ${params} failed to execute`,
        path: errorPath,
        nativeError: error,
      });
    }
  };
}
