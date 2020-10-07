import { ErrorFactory } from "../..";
import { IBuildClient, IInit, TResultSet } from "../types";

export function buildInit(args: IBuildClient) {
  const { client } = args;
  return async function init(info: IInit): Promise<TResultSet> {
    const { query, errorPath } = info;
    try {
      const result = await client.execute(query, undefined, { prepare: true });
      return result;
    } catch (error) {
      throw new ErrorFactory({
        name: "queryInitFailed",
        message: "problem in executing query",
        detail: `query: ${query} failed to execute`,
        path: errorPath,
        nativeError: error,
      });
    }
  };
}
