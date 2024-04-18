/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";

export const VerificationTelnyxConfigs: core.serialization.ObjectSchema<
    serializers.VerificationTelnyxConfigs.Raw,
    Hookdeck.VerificationTelnyxConfigs
> = core.serialization.object({
    publicKey: core.serialization.property("public_key", core.serialization.string()),
});

export declare namespace VerificationTelnyxConfigs {
    interface Raw {
        public_key: string;
    }
}
