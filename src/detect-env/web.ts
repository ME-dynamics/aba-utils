
import { TDetectX } from '../types';
export function detectWeb(): TDetectX {
   try {
    if ( typeof document !== 'undefined' && typeof navigator !=='undefined' ){

        return true;
     } else {
         return false;
     }
   } catch (error) {
      return false; 
   }
}