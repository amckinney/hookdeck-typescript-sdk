/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hookdeck from "../../../../api/index";
import * as core from "../../../../core";
import { EventBulkRetryCreateRequestQueryLastAttemptAtAny } from "./EventBulkRetryCreateRequestQueryLastAttemptAtAny";

export const EventBulkRetryCreateRequestQueryLastAttemptAt: core.serialization.Schema<
    serializers.EventBulkRetryCreateRequestQueryLastAttemptAt.Raw,
    Hookdeck.EventBulkRetryCreateRequestQueryLastAttemptAt
> = core.serialization.undiscriminatedUnion([
    core.serialization.date(),
    EventBulkRetryCreateRequestQueryLastAttemptAtAny,
]);

export declare namespace EventBulkRetryCreateRequestQueryLastAttemptAt {
    type Raw = string | EventBulkRetryCreateRequestQueryLastAttemptAtAny.Raw;
}
