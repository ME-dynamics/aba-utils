import { randomBytes } from "crypto";
import { ErrorFactory } from '../errorFactory';
import { detect } from "../detect-env";


export function cryptoRandom(value: number): Promise<Buffer> {
    return new Promise((resolve, reject)=> {
        if (!randomBytes || randomBytes === null) {
            throw new ErrorFactory({
                error: "cryptoRandomNotFound",
                message: "No suitable random number generator available.",
                detail: "Ensure that your runtime is linked against OpenSSL (or an equivalent) correctly.",
                path: `random digits module, secure random function, env: ${detect()}`
            })
        }
        randomBytes(value, (err, buffer)=> {
            if(err) {
                return reject(err);
            }
            return resolve(buffer); 
        })
    })
}