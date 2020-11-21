import { t_react_native_engine } from '../types'
declare const global: {HermesInternal: null | unknown};
export function detect_react_native() {
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


export function react_native_engine(): t_react_native_engine {
    if (global && global.HermesInternal === null) {
        return 'react_native_jsc';
    }else {
        return 'react_native_hermes'
    }
}


