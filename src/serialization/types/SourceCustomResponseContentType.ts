/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";

export const SourceCustomResponseContentType: core.serialization.Schema<
    serializers.SourceCustomResponseContentType.Raw,
    Hookdeck.SourceCustomResponseContentType
> = core.serialization.enum_(["json", "text", "xml"]);

export declare namespace SourceCustomResponseContentType {
    type Raw = "json" | "text" | "xml";
}
