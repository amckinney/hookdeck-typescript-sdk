/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";

export const OrderByDirection: core.serialization.Schema<serializers.OrderByDirection.Raw, Hookdeck.OrderByDirection> =
    core.serialization.enum_(["asc", "desc", "ASC", "DESC"]);

export declare namespace OrderByDirection {
    type Raw = "asc" | "desc" | "ASC" | "DESC";
}
