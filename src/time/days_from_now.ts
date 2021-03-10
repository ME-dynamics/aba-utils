import { Error_Factory } from "../../index";

export function days_from_now(days: number, error_path: string): number {
  if (days < 1 || !Number.isInteger(days))
    throw new Error_Factory({
      name: "time_not_valid",
      message: "day must be integer and cannot be zero or less",
      detail: `${days < 1 ? "! day is less than zero:" + `${days}` : ""} \n ${
        !Number.isInteger(days) ? "! days must be integer:" + `${days}` : ""
      } `,
      path: error_path,
      native_error: undefined,
    });
  return Date.now() + days * 86400000; // every day is 1000 * 60 * 60 * 24 milliseconds
}
