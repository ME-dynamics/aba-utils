
export interface IError {
    errorId?: string;
    timestamp?: number;
    error: string;
    message: string;
    detail?: string;
    path?: string;
    nativeError? : Error;
    
}

