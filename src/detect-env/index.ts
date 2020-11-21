import { detect_node } from './node';
import { detect_web } from './web';
import { detect_react_native, react_native_engine } from './react_native';
import { t_detect_platform } from '../types'

export function detect_env(): t_detect_platform {
    if(detect_web()){
        return 'web';
    } else if(detect_react_native()){
        return react_native_engine();
    } else if (detect_node()){
        return 'node';
    } else {
        throw new Error('platform not recognized')
    }
}

