import { ErrorFactory } from "../..";
import { IBuildClient, IInit } from "../types";

export function buildInit(args: IBuildClient) {
  const { client } = args;
  return async function init(info: IInit) {
    const { query, errorPath } = info;
    try {
      const result = await client.execute(query, undefined, { prepare: true });
      return result ? true : false;
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
