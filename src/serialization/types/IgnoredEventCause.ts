/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";

export const IgnoredEventCause: core.serialization.Schema<
    serializers.IgnoredEventCause.Raw,
    Hookdeck.IgnoredEventCause
> = core.serialization.enum_(["DISABLED", "FILTERED", "TRANSFORMATION_FAILED", "CLI_DISCONNECTED"]);

export declare namespace IgnoredEventCause {
    type Raw = "DISABLED" | "FILTERED" | "TRANSFORMATION_FAILED" | "CLI_DISCONNECTED";
}
