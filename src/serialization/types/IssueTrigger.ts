/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";
import { IssueType } from "./IssueType";
import { IssueTriggerReference } from "./IssueTriggerReference";
import { IssueTriggerChannels } from "./IssueTriggerChannels";

export const IssueTrigger: core.serialization.ObjectSchema<serializers.IssueTrigger.Raw, Hookdeck.IssueTrigger> =
    core.serialization.object({
        id: core.serialization.string(),
        teamId: core.serialization.property("team_id", core.serialization.string().optional()),
        name: core.serialization.string().optional(),
        type: IssueType,
        configs: IssueTriggerReference,
        channels: IssueTriggerChannels.optional(),
        disabledAt: core.serialization.property("disabled_at", core.serialization.date().optional()),
        updatedAt: core.serialization.property("updated_at", core.serialization.date()),
        createdAt: core.serialization.property("created_at", core.serialization.date()),
        deletedAt: core.serialization.property("deleted_at", core.serialization.date().optional()),
    });

export declare namespace IssueTrigger {
    interface Raw {
        id: string;
        team_id?: string | null;
        name?: string | null;
        type: IssueType.Raw;
        configs: IssueTriggerReference.Raw;
        channels?: IssueTriggerChannels.Raw | null;
        disabled_at?: string | null;
        updated_at: string;
        created_at: string;
        deleted_at?: string | null;
    }
}
