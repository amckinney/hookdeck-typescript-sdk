/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Hookdeck from "../../../../api";
import * as core from "../../../../core";

export const IgnoredEventBulkRetryListRequestOrderBy: core.serialization.Schema<
    serializers.IgnoredEventBulkRetryListRequestOrderBy.Raw,
    Hookdeck.IgnoredEventBulkRetryListRequestOrderBy
> = core.serialization.enum_(["created_at"]);

export declare namespace IgnoredEventBulkRetryListRequestOrderBy {
    type Raw = "created_at";
}
