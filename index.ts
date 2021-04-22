import * as types from "./src/types";
export * as types from "./src/types";
import { buildErrorFactory } from "./src/errorFactory";

export const ErrorFactory = buildErrorFactory();
export { detectEnv } from "./src/detect-env";

export { result } from "./src/result";

export { nullToUndefined } from "./src/nullToUndefined";
export { undefinedToNull } from "./src/undefinedToNull";

export { time } from "./src/time";
