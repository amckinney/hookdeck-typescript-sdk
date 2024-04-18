/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Hookdeck from "../../../../../api/index";
import * as core from "../../../../../core";
import { IgnoredEventBulkRetryCreateRequestQuery } from "../../types/IgnoredEventBulkRetryCreateRequestQuery";

export const IgnoredEventBulkRetryCreateRequest: core.serialization.Schema<
    serializers.IgnoredEventBulkRetryCreateRequest.Raw,
    Hookdeck.IgnoredEventBulkRetryCreateRequest
> = core.serialization.object({
    query: IgnoredEventBulkRetryCreateRequestQuery.optional(),
});

export declare namespace IgnoredEventBulkRetryCreateRequest {
    interface Raw {
        query?: IgnoredEventBulkRetryCreateRequestQuery.Raw | null;
    }
}
