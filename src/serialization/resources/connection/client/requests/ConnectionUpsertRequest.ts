/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as Hookdeck from "../../../../../api";
import * as core from "../../../../../core";
import { ConnectionUpsertRequestDestination } from "../../types/ConnectionUpsertRequestDestination";
import { ConnectionUpsertRequestSource } from "../../types/ConnectionUpsertRequestSource";
import { Rule } from "../../../../types/Rule";

export const ConnectionUpsertRequest: core.serialization.Schema<
    serializers.ConnectionUpsertRequest.Raw,
    Hookdeck.ConnectionUpsertRequest
> = core.serialization.object({
    name: core.serialization.string().optional(),
    description: core.serialization.string().optional(),
    destinationId: core.serialization.property("destination_id", core.serialization.string().optional()),
    sourceId: core.serialization.property("source_id", core.serialization.string().optional()),
    destination: ConnectionUpsertRequestDestination.optional(),
    source: ConnectionUpsertRequestSource.optional(),
    rules: core.serialization.list(Rule).optional(),
});

export declare namespace ConnectionUpsertRequest {
    interface Raw {
        name?: string | null;
        description?: string | null;
        destination_id?: string | null;
        source_id?: string | null;
        destination?: ConnectionUpsertRequestDestination.Raw | null;
        source?: ConnectionUpsertRequestSource.Raw | null;
        rules?: Rule.Raw[] | null;
    }
}
