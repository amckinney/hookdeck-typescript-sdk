/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";

export const ShopifyIntegrationConfigsRateLimitPeriod: core.serialization.Schema<
    serializers.ShopifyIntegrationConfigsRateLimitPeriod.Raw,
    Hookdeck.ShopifyIntegrationConfigsRateLimitPeriod
> = core.serialization.enum_(["minute", "second"]);

export declare namespace ShopifyIntegrationConfigsRateLimitPeriod {
    type Raw = "minute" | "second";
}
