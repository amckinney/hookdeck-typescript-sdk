/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";

export const VerificationPipedriveConfigs: core.serialization.ObjectSchema<
    serializers.VerificationPipedriveConfigs.Raw,
    Hookdeck.VerificationPipedriveConfigs
> = core.serialization.object({
    username: core.serialization.string(),
    password: core.serialization.string(),
});

export declare namespace VerificationPipedriveConfigs {
    interface Raw {
        username: string;
        password: string;
    }
}
