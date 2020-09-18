import { buildErrorFactory } from "./src/errorFactory";

export const ErrorFactory = buildErrorFactory();
export { detect } from "./src/detect-env";
export { secureRandomNumber } from "./src/random-digits";
export { httpResult } from "./src/httpResult";
export { result } from "./src/result";
export {
  IError,
  IResult,
  ISecureRandomNumber,
  TDetectPlatform,
  TDetectX,
  TReactNativeEngine,
} from "./src/types";
