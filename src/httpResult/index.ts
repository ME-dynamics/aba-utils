import { created, noContent, ok, accepted, nonAuthoritativeInformation, resetContent, partialContent, multiStatus } from "./success"
import { badRequest, unauthorized, paymentRequired, forbidden, notFound, methodNotAllowed, notAcceptable, proxyAuthenticationRequired, requestTimeout, conflict, gone, lengthRequired, preconditionFailed, requestEntityTooLarge, requestURITooLong, unsupportedMediaType, requestedRangeNotSatisfiable, expectationFailed, ImATeapot, insufficientSpaceOnResource, methodFailure, unprocessableEntity, locked, failedDependency, tooManyRequests, requestHeaderFieldsTooLarge, unavailableForLegalReasons } from "./clientError"
import { internalServerError, notImplemented, badGateway, serviceUnavailable, gatewayTimeout, httpVersionNotSupported, insufficientStorage, networkAuthenticationRequired } from "./serverError"
import { multipleChoices, movedPermenantly, movedTemporarily, seeOther, notModified, useProxy, temporaryRedirect, permanentRedirect } from "./redirection"
import { IResult } from "../types";
// TODO: return redirection,
export const httpResult = {
    success: {
        ok,
        noContent,
        created,
        accepted,
        nonAuthoritativeInformation,
        resetContent,
        partialContent,
        multiStatus
    },
    redirection:{
        multipleChoices,
        movedPermenantly,
        movedTemporarily,
        seeOther,
        notModified,
        useProxy,
        temporaryRedirect,
        permanentRedirect
    },
    serverError: {
        internalServerError,
        notImplemented,
        badGateway,
        serviceUnavailable,
        gatewayTimeout,
        httpVersionNotSupported,
        insufficientStorage,
        networkAuthenticationRequired
    },
    clientError: {
        badRequest,
        unauthorized,
        paymentRequired,
        forbidden,
        notFound,
        methodNotAllowed,
        notAcceptable,
        proxyAuthenticationRequired,
        requestTimeout,
        conflict,
        gone,
        lengthRequired,
        preconditionFailed,
        requestEntityTooLarge,
        requestURITooLong,
        unsupportedMediaType,
        requestedRangeNotSatisfiable,
        expectationFailed,
        ImATeapot,
        insufficientSpaceOnResource,
        methodFailure,
        unprocessableEntity,
        locked,
        failedDependency,
        tooManyRequests,
        requestHeaderFieldsTooLarge,
        unavailableForLegalReasons
    }
}




export function result<T>(args: IResult<T>): IResult<T> {
    return {
        success: args.success,
        payload: args.payload,
        error: args.error
    }
}