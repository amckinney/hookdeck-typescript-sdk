/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";
import { ShortEventDataBodyOne } from "./ShortEventDataBodyOne";

export const ShortEventDataBody: core.serialization.Schema<
    serializers.ShortEventDataBody.Raw,
    Hookdeck.ShortEventDataBody
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    ShortEventDataBodyOne,
    core.serialization.list(core.serialization.unknown()),
]);

export declare namespace ShortEventDataBody {
    type Raw = string | ShortEventDataBodyOne.Raw | unknown[];
}
