export interface IError {
  name: string;
  message: string;
  detail: string | undefined;
  path: string | undefined;
  nativeError: Error | undefined;
}
