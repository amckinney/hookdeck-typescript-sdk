/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Hookdeck from "../../../../api";
import * as core from "../../../../core";
import { EventBulkRetryCreateRequestQuerySuccessfulAtAny } from "./EventBulkRetryCreateRequestQuerySuccessfulAtAny";

export const EventBulkRetryCreateRequestQuerySuccessfulAt: core.serialization.Schema<
    serializers.EventBulkRetryCreateRequestQuerySuccessfulAt.Raw,
    Hookdeck.EventBulkRetryCreateRequestQuerySuccessfulAt
> = core.serialization.undiscriminatedUnion([
    core.serialization.date(),
    EventBulkRetryCreateRequestQuerySuccessfulAtAny,
]);

export declare namespace EventBulkRetryCreateRequestQuerySuccessfulAt {
    type Raw = string | EventBulkRetryCreateRequestQuerySuccessfulAtAny.Raw;
}
