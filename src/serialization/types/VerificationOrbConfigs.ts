/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";

export const VerificationOrbConfigs: core.serialization.ObjectSchema<
    serializers.VerificationOrbConfigs.Raw,
    Hookdeck.VerificationOrbConfigs
> = core.serialization.object({
    webhookSecretKey: core.serialization.property("webhook_secret_key", core.serialization.string()),
});

export declare namespace VerificationOrbConfigs {
    interface Raw {
        webhook_secret_key: string;
    }
}
