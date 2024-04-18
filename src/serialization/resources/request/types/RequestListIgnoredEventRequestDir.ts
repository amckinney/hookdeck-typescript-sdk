/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hookdeck from "../../../../api/index";
import * as core from "../../../../core";

export const RequestListIgnoredEventRequestDir: core.serialization.Schema<
    serializers.RequestListIgnoredEventRequestDir.Raw,
    Hookdeck.RequestListIgnoredEventRequestDir
> = core.serialization.enum_(["asc", "desc"]);

export declare namespace RequestListIgnoredEventRequestDir {
    type Raw = "asc" | "desc";
}
