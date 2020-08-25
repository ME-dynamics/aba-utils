
import { TDetectX } from '../types';
export function detectWeb(): TDetectX {
    if ( typeof document !== 'undefined' && typeof navigator !=='undefined' ){

       return true;
    } else {
        return false;
    }
}