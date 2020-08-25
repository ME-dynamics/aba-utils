import { TReactNativeEngine } from '../types'
declare const global: {HermesInternal: null | unknown};
export function detectReactNative() {
  if (
    typeof document === "undefined" &&
    typeof navigator !== "undefined" &&
    navigator.product === "ReactNative"
  ) {
      return true
  }else {
      return false;
  }
}


export function reactNativeEngine(): TReactNativeEngine {
    if (global && global.HermesInternal === null) {
        return 'reactNativeJSC';
    }else {
        return 'reactNativeHERMES'
    }
}


