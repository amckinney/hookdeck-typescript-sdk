/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hookdeck from "../../../../api/index";
import * as core from "../../../../core";

export const EventBulkRetryCreateRequestQueryCliIdAll: core.serialization.ObjectSchema<
    serializers.EventBulkRetryCreateRequestQueryCliIdAll.Raw,
    Hookdeck.EventBulkRetryCreateRequestQueryCliIdAll
> = core.serialization.object({
    any: core.serialization.boolean().optional(),
    all: core.serialization.boolean().optional(),
});

export declare namespace EventBulkRetryCreateRequestQueryCliIdAll {
    interface Raw {
        any?: boolean | null;
        all?: boolean | null;
    }
}
