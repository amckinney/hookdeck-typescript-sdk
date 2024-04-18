/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";
import { IgnoredEventCause } from "./IgnoredEventCause";
import { IgnoredEventMeta } from "./IgnoredEventMeta";

export const IgnoredEvent: core.serialization.ObjectSchema<serializers.IgnoredEvent.Raw, Hookdeck.IgnoredEvent> =
    core.serialization.object({
        id: core.serialization.string(),
        teamId: core.serialization.property("team_id", core.serialization.string()),
        webhookId: core.serialization.property("webhook_id", core.serialization.string()),
        cause: IgnoredEventCause,
        requestId: core.serialization.property("request_id", core.serialization.string()),
        meta: IgnoredEventMeta.optional(),
        updatedAt: core.serialization.property("updated_at", core.serialization.date()),
        createdAt: core.serialization.property("created_at", core.serialization.date()),
    });

export declare namespace IgnoredEvent {
    interface Raw {
        id: string;
        team_id: string;
        webhook_id: string;
        cause: IgnoredEventCause.Raw;
        request_id: string;
        meta?: IgnoredEventMeta.Raw | null;
        updated_at: string;
        created_at: string;
    }
}
