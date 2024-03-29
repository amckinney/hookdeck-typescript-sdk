/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as Hookdeck from "../../../../../api";
import * as core from "../../../../../core";

export const BookmarkUpdateRequest: core.serialization.Schema<
    serializers.BookmarkUpdateRequest.Raw,
    Hookdeck.BookmarkUpdateRequest
> = core.serialization.object({
    eventDataId: core.serialization.property("event_data_id", core.serialization.string().optional()),
    webhookId: core.serialization.property("webhook_id", core.serialization.string().optional()),
    label: core.serialization.string().optional(),
    name: core.serialization.string().optional(),
});

export declare namespace BookmarkUpdateRequest {
    interface Raw {
        event_data_id?: string | null;
        webhook_id?: string | null;
        label?: string | null;
        name?: string | null;
    }
}
