export interface IResult<T> {
  success: boolean;
  payload?: T;
  error?: string;
}
