import type { tDetectX } from "../types";
declare const process: { versions: { node: string } | undefined };

/**
 ** detect if environment is node js
 * @returns boolean
 */
export function detectNode(): tDetectX {
  try {
    if (process.versions && process.versions.node) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}
