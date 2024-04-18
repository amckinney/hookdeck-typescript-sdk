/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";

export const RequestIngestPriority: core.serialization.Schema<
    serializers.RequestIngestPriority.Raw,
    Hookdeck.RequestIngestPriority
> = core.serialization.enum_(["NORMAL", "LOW"]);

export declare namespace RequestIngestPriority {
    type Raw = "NORMAL" | "LOW";
}
