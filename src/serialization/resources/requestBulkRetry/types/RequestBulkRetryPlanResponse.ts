/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Hookdeck from "../../../../api";
import * as core from "../../../../core";

export const RequestBulkRetryPlanResponse: core.serialization.ObjectSchema<
    serializers.RequestBulkRetryPlanResponse.Raw,
    Hookdeck.RequestBulkRetryPlanResponse
> = core.serialization.object({
    estimatedBatch: core.serialization.property("estimated_batch", core.serialization.number().optional()),
    estimatedCount: core.serialization.property("estimated_count", core.serialization.number().optional()),
    progress: core.serialization.number().optional(),
});

export declare namespace RequestBulkRetryPlanResponse {
    interface Raw {
        estimated_batch?: number | null;
        estimated_count?: number | null;
        progress?: number | null;
    }
}
