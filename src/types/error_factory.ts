export interface i_error {
  name: string;
  message: string;
  detail: string | undefined;
  path: string | undefined;
  native_error: Error | undefined;
}
