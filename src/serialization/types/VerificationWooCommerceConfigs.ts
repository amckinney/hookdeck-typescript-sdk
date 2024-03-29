/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";

export const VerificationWooCommerceConfigs: core.serialization.ObjectSchema<
    serializers.VerificationWooCommerceConfigs.Raw,
    Hookdeck.VerificationWooCommerceConfigs
> = core.serialization.object({
    webhookSecretKey: core.serialization.property("webhook_secret_key", core.serialization.string()),
});

export declare namespace VerificationWooCommerceConfigs {
    interface Raw {
        webhook_secret_key: string;
    }
}
