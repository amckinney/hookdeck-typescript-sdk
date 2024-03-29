/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";

export const VerificationShopifyConfigsRateLimitPeriod: core.serialization.Schema<
    serializers.VerificationShopifyConfigsRateLimitPeriod.Raw,
    Hookdeck.VerificationShopifyConfigsRateLimitPeriod
> = core.serialization.enum_(["minute", "second"]);

export declare namespace VerificationShopifyConfigsRateLimitPeriod {
    type Raw = "minute" | "second";
}
