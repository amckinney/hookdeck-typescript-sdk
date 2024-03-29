/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";
import { RetryStrategy } from "./RetryStrategy";

export const RetryRule: core.serialization.ObjectSchema<serializers.RetryRule.Raw, Hookdeck.RetryRule> =
    core.serialization.object({
        type: core.serialization.stringLiteral("retry"),
        strategy: RetryStrategy,
        interval: core.serialization.number().optional(),
        count: core.serialization.number().optional(),
    });

export declare namespace RetryRule {
    interface Raw {
        type: "retry";
        strategy: RetryStrategy.Raw;
        interval?: number | null;
        count?: number | null;
    }
}
