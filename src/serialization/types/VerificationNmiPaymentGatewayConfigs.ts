/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";

export const VerificationNmiPaymentGatewayConfigs: core.serialization.ObjectSchema<
    serializers.VerificationNmiPaymentGatewayConfigs.Raw,
    Hookdeck.VerificationNmiPaymentGatewayConfigs
> = core.serialization.object({
    webhookSecretKey: core.serialization.property("webhook_secret_key", core.serialization.string()),
});

export declare namespace VerificationNmiPaymentGatewayConfigs {
    interface Raw {
        webhook_secret_key: string;
    }
}
