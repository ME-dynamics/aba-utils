
import { t_detect_x } from '../types';

/**
 ** detect if environment is web
 * @returns boolean
 */
export function detect_web(): t_detect_x {
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