import { randomBytes } from "crypto";
import { Error_Factory } from "../../index";
import { detect_env } from "../detect-env";

export function crypto_random(value: number): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    if (!randomBytes || randomBytes === null) {
      throw new Error_Factory({
        name: "crypto_random_not_found",
        message: "No suitable random number generator available.",
        detail:
          "Ensure that your runtime is linked against OpenSSL (or an equivalent) correctly.",
        path: `random digits module, secure random function, env: ${detect_env()}`,
        native_error: undefined,
      });
    }
    randomBytes(value, (err, buffer) => {
      if (err) {
        return reject(err);
      }
      return resolve(buffer);
    });
  });
}
