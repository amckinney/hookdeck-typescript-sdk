/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";

export const VerificationPostmarkConfigs: core.serialization.ObjectSchema<
    serializers.VerificationPostmarkConfigs.Raw,
    Hookdeck.VerificationPostmarkConfigs
> = core.serialization.object({
    username: core.serialization.string(),
    password: core.serialization.string(),
});

export declare namespace VerificationPostmarkConfigs {
    interface Raw {
        username: string;
        password: string;
    }
}
