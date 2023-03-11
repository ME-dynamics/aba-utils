import { detectNode } from "./node";
import { detectWeb } from "./web";
import { detectReactNative, reactNativeEngine } from "./reactNative";
import type { tDetectPlatform } from "../types";

/**
 ** detect what environment code is running on.
 ** supports react native, web, node
 * @returns a string that shows what platform code is running on.
 */

export function detectEnv(): tDetectPlatform {
  if (detectWeb()) {
    return "web";
  }
  if (detectReactNative()) {
    return reactNativeEngine();
  }
  if (detectNode()) {
    return "node";
  }
  return "unknown";
}
