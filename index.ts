import { buildErrorFactory } from "./src/errorFactory";

export const ErrorFactory = buildErrorFactory();
export { detect } from "./src/detect-env";
export { secureRandomNumber } from "./src/random-digits";
export { httpResult } from "./src/httpResult";
export { result } from "./src/result";

export { buildInit, buildSelect, buildUpsert } from "./src/dbClient";

export {
  createType,
  createTable,
  IN,
  equal,
  greaterThan,
  lessThan,
  notEqual,
  select,
} from "./src/query";
export * as types from "./src/types";
