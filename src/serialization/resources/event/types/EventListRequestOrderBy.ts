/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hookdeck from "../../../../api/index";
import * as core from "../../../../core";

export const EventListRequestOrderBy: core.serialization.Schema<
    serializers.EventListRequestOrderBy.Raw,
    Hookdeck.EventListRequestOrderBy
> = core.serialization.enum_(["last_attempt_at", "created_at"]);

export declare namespace EventListRequestOrderBy {
    type Raw = "last_attempt_at" | "created_at";
}
