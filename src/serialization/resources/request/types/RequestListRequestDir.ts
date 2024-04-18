/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hookdeck from "../../../../api/index";
import * as core from "../../../../core";

export const RequestListRequestDir: core.serialization.Schema<
    serializers.RequestListRequestDir.Raw,
    Hookdeck.RequestListRequestDir
> = core.serialization.enum_(["asc", "desc"]);

export declare namespace RequestListRequestDir {
    type Raw = "asc" | "desc";
}
