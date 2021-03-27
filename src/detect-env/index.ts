import { detectNode } from './node';
import { detectWeb } from './web';
import { detectReactNative, reactNativeEngine } from './react_native';
import { tDetectPlatform } from '../types'


/**
 ** detect what environment code is running on.
 ** supports react native, web, node
 * @returns a string that shows what platform code is running on.
 */

export function detectEnv(): tDetectPlatform {
    if(detectWeb()){
        return 'web';
    } else if(detectReactNative()){
        return reactNativeEngine();
    } else if (detectNode()){
        return 'node';
    } else {
        throw new Error('platform not recognized')
    }
}

