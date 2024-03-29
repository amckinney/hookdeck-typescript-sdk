/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Hookdeck from "../../../../api";
import * as core from "../../../../core";

export const IgnoredEventBulkRetryCreateRequestQueryCause: core.serialization.Schema<
    serializers.IgnoredEventBulkRetryCreateRequestQueryCause.Raw,
    Hookdeck.IgnoredEventBulkRetryCreateRequestQueryCause
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.list(core.serialization.string()),
]);

export declare namespace IgnoredEventBulkRetryCreateRequestQueryCause {
    type Raw = string | string[];
}
