/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Hookdeck from "../../../../../api/index";
import * as core from "../../../../../core";

export const TransformationUpdateRequest: core.serialization.Schema<
    serializers.TransformationUpdateRequest.Raw,
    Hookdeck.TransformationUpdateRequest
> = core.serialization.object({
    name: core.serialization.string().optional(),
    code: core.serialization.string().optional(),
    env: core.serialization.record(core.serialization.string(), core.serialization.string()).optional(),
});

export declare namespace TransformationUpdateRequest {
    interface Raw {
        name?: string | null;
        code?: string | null;
        env?: Record<string, string> | null;
    }
}
