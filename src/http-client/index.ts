import { fastify } from "fastify";






export function http_client(dev: boolean) {
    return fastify({
        logger: dev,
        trustProxy: "127.0.0.1"
    })
}