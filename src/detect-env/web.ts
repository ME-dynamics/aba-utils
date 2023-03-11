import type { tDetectX } from "../types";

/**
 ** detect if environment is web
 * @returns boolean
 */
export function detectWeb(): tDetectX {
  try {
    if (typeof document !== "undefined" && typeof navigator !== "undefined") {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}
