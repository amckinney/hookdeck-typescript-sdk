/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";

export const SourceAllowedHttpMethodItem: core.serialization.Schema<
    serializers.SourceAllowedHttpMethodItem.Raw,
    Hookdeck.SourceAllowedHttpMethodItem
> = core.serialization.enum_(["GET", "POST", "PUT", "PATCH", "DELETE"]);

export declare namespace SourceAllowedHttpMethodItem {
    type Raw = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
}
