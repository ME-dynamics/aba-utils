
import { t_detect_x } from '../types';
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