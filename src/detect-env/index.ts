import { detectNode } from './node';
import { detectWeb } from './web';
import { detectReactNative, reactNativeEngine } from './reactNative';
import { TDetectPlatform } from '../types'

export function detect(): TDetectPlatform {
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

