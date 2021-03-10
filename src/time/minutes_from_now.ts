import { Error_Factory } from "../../index";

export function minutes_from_now(minutes: number, error_path: string): number {
  if (minutes < 1 || !Number.isInteger(minutes))
    throw new Error_Factory({
      name: "time_not_valid",
      message: "day must be integer and cannot be zero or less",
      detail: `${
        minutes < 1 ? "! minutes is less than zero:" + `${minutes}` : ""
      } \n ${
        !Number.isInteger(minutes)
          ? "! minutes must be integer:" + `${minutes}`
          : ""
      } `,
      path: error_path,
      native_error: undefined,
    });
  return Date.now() + minutes * 60000; // every minute is 60 * 1000 milliseconds
}
