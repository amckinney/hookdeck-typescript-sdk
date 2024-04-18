/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../errors/index";
import * as Hookdeck from "../index";

export class UnprocessableEntityError extends errors.HookdeckError {
    constructor(body: Hookdeck.ApiErrorResponse) {
        super({
            message: "UnprocessableEntityError",
            statusCode: 422,
            body: body,
        });
        Object.setPrototypeOf(this, UnprocessableEntityError.prototype);
    }
}
