/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";
import { AttemptErrorCodes } from "./AttemptErrorCodes";

export const DeliveryIssueAggregationKeys: core.serialization.ObjectSchema<
    serializers.DeliveryIssueAggregationKeys.Raw,
    Hookdeck.DeliveryIssueAggregationKeys
> = core.serialization.object({
    webhookId: core.serialization.property("webhook_id", core.serialization.list(core.serialization.string())),
    responseStatus: core.serialization.property(
        "response_status",
        core.serialization.list(core.serialization.number())
    ),
    errorCode: core.serialization.property("error_code", core.serialization.list(AttemptErrorCodes)),
});

export declare namespace DeliveryIssueAggregationKeys {
    interface Raw {
        webhook_id: string[];
        response_status: number[];
        error_code: AttemptErrorCodes.Raw[];
    }
}
