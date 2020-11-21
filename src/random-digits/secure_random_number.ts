import { crypto_random } from "./crypto_random";
import { error_factory } from "../../index";
import { detect } from "../detect-env";
import { calculate_parameters } from "./calculate_parameters";
import { i_secure_random_number } from "../types";

export async function secure_random_number(
  args: i_secure_random_number
): Promise<number> {
  const { min, max } = args;

  if (!min) {
    throw new error_factory({
      name: "min_not_defined",
      message: "you should define min value",
      detail: "",
      path: `random digits, secure random module, env: ${detect()}`,
      native_error: undefined,
    });
  }

  if (!max) {
    throw new error_factory({
      name: "max_not_defined",
      message: "you should define max value",
      detail: "",
      path: `random digits, secure random module, env: ${detect()}`,
      native_error: undefined,
    });
  }

  if (min % 1 !== 0) {
    throw new error_factory({
      name: "min_not_integer",
      message: "you should define min as an integer",
      detail: "",
      path: `random digits, secure random module, env: ${detect()}`,
      native_error: undefined,
    });
  }

  if (max % 1 !== 0) {
    throw new error_factory({
      name: "max_not_integer",
      message: "you should define max as an integer",
      detail: "",
      path: `random digits, secure random module, env: ${detect()}`,
      native_error: undefined,
    });
  }

  if (!(max > min)) {
    throw new error_factory({
      name: "max_lower_than_min",
      message: "max must be greater than min",
      detail: "",
      path: `random digits, secure random module, env: ${detect()}`,
      native_error: undefined,
    });
  }

  /* We hardcode the values for the following:
   *
   *   https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER
   *   https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
   *
   * ... as Babel does not appear to transpile them, despite being ES6.
   */

  if (min < -9007199254740991 || min > 9007199254740991) {
    throw new error_factory({
      name: "min_safe_integer",
      message: "must be safe integer ",
      detail: "",
      path: `random digits, secure random module, env: ${detect()}`,
      native_error: undefined,
    });
  }

  if (max < -9007199254740991 || max > 9007199254740991) {
    throw new error_factory({
      name: "max_safe_integer",
      message: "must be safe integer ",
      detail: "",
      path: `random digits, secure random module, env: ${detect()}`,
      native_error: undefined,
    });
  }

  const range: number = max - min;

  if (range < -9007199254740991 || range > 9007199254740991) {
    throw new error_factory({
      name: "range_safe_integer",
      message: "must be safe integer ",
      detail: "",
      path: `random digits, secure random module, env: ${detect()}`,
      native_error: undefined,
    });
  }

  const { bytes_needed, mask } = calculate_parameters(range);
  let random_value = 0;
  const random_bytes = await crypto_random(bytes_needed);
  for (let i = 0; i < bytes_needed; i++) {
    random_value |= random_bytes[i] << (8 * i);
  }
  random_value = random_value & mask;
  if (random_value <= range) {
    /* We've been working with 0 as a starting point, so we need to
     * add the `minimum` here. */
    return min + random_value;
  } else {
    /* Outside of the acceptable range, throw it away and try again.
     * We don't try any modulo tricks, as this would introduce bias. */
    return await secure_random_number({ min, max });
  }
}
