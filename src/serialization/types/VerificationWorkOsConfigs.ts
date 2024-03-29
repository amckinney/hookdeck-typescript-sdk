/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";

export const VerificationWorkOsConfigs: core.serialization.ObjectSchema<
    serializers.VerificationWorkOsConfigs.Raw,
    Hookdeck.VerificationWorkOsConfigs
> = core.serialization.object({
    webhookSecretKey: core.serialization.property("webhook_secret_key", core.serialization.string()),
});

export declare namespace VerificationWorkOsConfigs {
    interface Raw {
        webhook_secret_key: string;
    }
}
