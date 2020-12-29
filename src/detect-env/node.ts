
import { t_detect_x } from '../types';
declare const process : {versions: {node: string} | undefined}

/**
 ** detect if environment is node js
 * @returns boolean
 */
export function detect_node(): t_detect_x {
    try {
        if(process.versions && process.versions.node ) {
            return true
        } else {
            return false;
        }    
    } catch (error) {
        return false;
    }
    
}



