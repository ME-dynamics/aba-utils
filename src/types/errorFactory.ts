
export interface IError {
    name: string;
    message: string;
    detail?: string;
    path?: string;
    nativeError? : Error;
    timestamp?: number;
}

