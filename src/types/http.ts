import { FastifyRequest, FastifyReply } from "fastify";

export type t_request<T> = FastifyRequest<T>;
// http interfaces start
export type t_reply = FastifyReply;
// http interfaces end
