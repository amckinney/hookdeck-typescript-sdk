/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";
import { VerificationPostmarkType } from "./VerificationPostmarkType";
import { VerificationPostmarkConfigs } from "./VerificationPostmarkConfigs";

export const VerificationPostmark: core.serialization.ObjectSchema<
    serializers.VerificationPostmark.Raw,
    Hookdeck.VerificationPostmark
> = core.serialization.object({
    type: VerificationPostmarkType,
    configs: VerificationPostmarkConfigs.optional(),
});

export declare namespace VerificationPostmark {
    interface Raw {
        type: VerificationPostmarkType.Raw;
        configs?: VerificationPostmarkConfigs.Raw | null;
    }
}
