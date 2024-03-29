/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";
import { RequestRejectionCause } from "./RequestRejectionCause";
import { RequestIngestPriority } from "./RequestIngestPriority";
import { ShortEventData } from "./ShortEventData";

export const Request: core.serialization.ObjectSchema<serializers.Request.Raw, Hookdeck.Request> =
    core.serialization.object({
        id: core.serialization.string(),
        teamId: core.serialization.property("team_id", core.serialization.string()),
        verified: core.serialization.boolean().optional(),
        originalEventDataId: core.serialization.property(
            "original_event_data_id",
            core.serialization.string().optional()
        ),
        rejectionCause: core.serialization.property("rejection_cause", RequestRejectionCause),
        ingestPriority: core.serialization.property("ingest_priority", RequestIngestPriority.optional()),
        ingestedAt: core.serialization.property("ingested_at", core.serialization.date().optional()),
        sourceId: core.serialization.property("source_id", core.serialization.string()),
        eventsCount: core.serialization.property("events_count", core.serialization.number().optional()),
        cliEventsCount: core.serialization.property("cli_events_count", core.serialization.number().optional()),
        ignoredCount: core.serialization.property("ignored_count", core.serialization.number().optional()),
        updatedAt: core.serialization.property("updated_at", core.serialization.date()),
        createdAt: core.serialization.property("created_at", core.serialization.date()),
        data: ShortEventData.optional(),
    });

export declare namespace Request {
    interface Raw {
        id: string;
        team_id: string;
        verified?: boolean | null;
        original_event_data_id?: string | null;
        rejection_cause: RequestRejectionCause.Raw;
        ingest_priority?: RequestIngestPriority.Raw | null;
        ingested_at?: string | null;
        source_id: string;
        events_count?: number | null;
        cli_events_count?: number | null;
        ignored_count?: number | null;
        updated_at: string;
        created_at: string;
        data?: ShortEventData.Raw | null;
    }
}
