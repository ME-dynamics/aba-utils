import { fastify } from "fastify";





/**
 ** http_client function
 * @param dev boolean to determine development mode
 * @returns fastify instance
 */
export function http_client(dev: boolean) {
    return fastify({
        logger: dev,
        trustProxy: "127.0.0.1"
    })
}