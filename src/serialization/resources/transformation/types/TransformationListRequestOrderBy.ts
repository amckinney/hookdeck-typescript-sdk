/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hookdeck from "../../../../api/index";
import * as core from "../../../../core";

export const TransformationListRequestOrderBy: core.serialization.Schema<
    serializers.TransformationListRequestOrderBy.Raw,
    Hookdeck.TransformationListRequestOrderBy
> = core.serialization.enum_(["created_at"]);

export declare namespace TransformationListRequestOrderBy {
    type Raw = "created_at";
}
