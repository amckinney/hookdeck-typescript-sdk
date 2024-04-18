/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";
import { Request } from "./Request";
import { Event } from "./Event";

export const RetryRequest: core.serialization.ObjectSchema<serializers.RetryRequest.Raw, Hookdeck.RetryRequest> =
    core.serialization.object({
        request: Request,
        events: core.serialization.list(Event).optional(),
    });

export declare namespace RetryRequest {
    interface Raw {
        request: Request.Raw;
        events?: Event.Raw[] | null;
    }
}
