import { Error_Factory } from "../../index";

export function seconds_from_now(seconds: number, error_path: string): number {
  if (seconds < 1 || !Number.isInteger(seconds))
    throw new Error_Factory({
      name: "time_not_valid",
      message: "day must be integer and cannot be zero or less",
      detail: `${
        seconds < 1 ? "! seconds is less than zero:" + `${seconds}` : ""
      } \n ${
        !Number.isInteger(seconds)
          ? "! seconds must be integer:" + `${seconds}`
          : ""
      } `,
      path: error_path,
      native_error: undefined,
    });
  return Date.now() + seconds * 1000; // every second is 1000 milliseconds
}
