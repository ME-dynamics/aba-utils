import { tReactNativeEngine, tDetectX } from '../types'
declare const global: {HermesInternal: null | unknown};

/**
 ** detect if running in react native environment
 * @returns boolean
 */
export function detectReactNative(): tDetectX {
    try {
        if (
            typeof document === "undefined" &&
            typeof navigator !== "undefined" &&
            navigator.product === "ReactNative"
          ) {
              return true
          }else {
              return false;
          }
    } catch (error) {
        return false;
    }
  
}

/**
 ** detect if react native's javascript engine is hermes or jsc
 * @returns a string for jsc or hermes
 */
export function reactNativeEngine(): tReactNativeEngine {
    if (global && global.HermesInternal === null) {
        return 'react_native_jsc';
    }else {
        return 'react_native_hermes'
    }
}


