import { Error_Factory } from "../../index";

export function hours_from_now(hours: number, error_path: string): number {
  if (hours < 1 || !Number.isInteger(hours))
    throw new Error_Factory({
      name: "time_not_valid",
      message: "day must be integer and cannot be zero or less",
      detail: `${
        hours < 1 ? "! hours is less than zero:" + `${hours}` : ""
      } \n ${
        !Number.isInteger(hours) ? "! hours must be integer:" + `${hours}` : ""
      } `,
      path: error_path,
      native_error: undefined,
    });
  return Date.now() + hours * 3600000; // every hour is 60 * 60 * 1000 milliseconds
}
