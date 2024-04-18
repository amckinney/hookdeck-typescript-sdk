/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";
import { VerificationSanityType } from "./VerificationSanityType";
import { VerificationSanityConfigs } from "./VerificationSanityConfigs";

export const VerificationSanity: core.serialization.ObjectSchema<
    serializers.VerificationSanity.Raw,
    Hookdeck.VerificationSanity
> = core.serialization.object({
    type: VerificationSanityType,
    configs: VerificationSanityConfigs.optional(),
});

export declare namespace VerificationSanity {
    interface Raw {
        type: VerificationSanityType.Raw;
        configs?: VerificationSanityConfigs.Raw | null;
    }
}
