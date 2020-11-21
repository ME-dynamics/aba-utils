export interface i_result<T> {
  success: boolean;
  payload: T | undefined;
  error: string | undefined;
}
