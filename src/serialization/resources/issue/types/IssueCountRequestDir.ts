/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hookdeck from "../../../../api/index";
import * as core from "../../../../core";

export const IssueCountRequestDir: core.serialization.Schema<
    serializers.IssueCountRequestDir.Raw,
    Hookdeck.IssueCountRequestDir
> = core.serialization.enum_(["asc", "desc"]);

export declare namespace IssueCountRequestDir {
    type Raw = "asc" | "desc";
}
