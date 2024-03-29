/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";

export const Transformation: core.serialization.ObjectSchema<serializers.Transformation.Raw, Hookdeck.Transformation> =
    core.serialization.object({
        id: core.serialization.string(),
        teamId: core.serialization.property("team_id", core.serialization.string()),
        name: core.serialization.string(),
        code: core.serialization.string(),
        encryptedEnv: core.serialization.property("encrypted_env", core.serialization.string().optional()),
        iv: core.serialization.string().optional(),
        env: core.serialization.record(core.serialization.string(), core.serialization.string().optional()).optional(),
        updatedAt: core.serialization.property("updated_at", core.serialization.date()),
        createdAt: core.serialization.property("created_at", core.serialization.date()),
    });

export declare namespace Transformation {
    interface Raw {
        id: string;
        team_id: string;
        name: string;
        code: string;
        encrypted_env?: string | null;
        iv?: string | null;
        env?: Record<string, string | null | undefined> | null;
        updated_at: string;
        created_at: string;
    }
}
