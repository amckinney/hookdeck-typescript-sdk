/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";
import { VerificationAkeneoType } from "./VerificationAkeneoType";
import { VerificationAkeneoConfigs } from "./VerificationAkeneoConfigs";

export const VerificationAkeneo: core.serialization.ObjectSchema<
    serializers.VerificationAkeneo.Raw,
    Hookdeck.VerificationAkeneo
> = core.serialization.object({
    type: VerificationAkeneoType,
    configs: VerificationAkeneoConfigs.optional(),
});

export declare namespace VerificationAkeneo {
    interface Raw {
        type: VerificationAkeneoType.Raw;
        configs?: VerificationAkeneoConfigs.Raw | null;
    }
}
