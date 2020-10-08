import * as types from "./src/types";
export * as types from "./src/types";
import { buildErrorFactory } from "./src/errorFactory";

export const ErrorFactory = buildErrorFactory();
export { detect } from "./src/detect-env";
export { secureRandomNumber } from "./src/random-digits";
export { httpResult } from "./src/httpResult";
export { result } from "./src/result";

export {
  buildInit,
  buildSelect,
  buildUpsert,
  buildDelete,
} from "./src/dbClient";

export {
  createType,
  createTable,
  IN,
  equal,
  greaterThan,
  lessThan,
  notEqual,
  select,
  deleteQuery,
  insert,
  update,
} from "./src/query";
