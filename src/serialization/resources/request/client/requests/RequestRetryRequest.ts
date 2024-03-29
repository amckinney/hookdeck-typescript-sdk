/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as Hookdeck from "../../../../../api";
import * as core from "../../../../../core";

export const RequestRetryRequest: core.serialization.Schema<
    serializers.RequestRetryRequest.Raw,
    Hookdeck.RequestRetryRequest
> = core.serialization.object({
    webhookIds: core.serialization.property("webhook_ids", core.serialization.list(core.serialization.string())),
});

export declare namespace RequestRetryRequest {
    interface Raw {
        webhook_ids: string[];
    }
}
