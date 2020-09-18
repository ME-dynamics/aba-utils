
import { TDetectX } from '../types';
declare const process : {versions: {node: string} | undefined}
export function detectNode(): TDetectX {
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



