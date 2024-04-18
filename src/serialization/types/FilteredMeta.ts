/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";

export const FilteredMeta: core.serialization.Schema<serializers.FilteredMeta.Raw, Hookdeck.FilteredMeta> =
    core.serialization.enum_(["body", "headers", "path", "query"]);

export declare namespace FilteredMeta {
    type Raw = "body" | "headers" | "path" | "query";
}
