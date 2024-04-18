/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";

export const VerificationPylonType: core.serialization.Schema<
    serializers.VerificationPylonType.Raw,
    Hookdeck.VerificationPylonType
> = core.serialization.enum_(["pylon"]);

export declare namespace VerificationPylonType {
    type Raw = "pylon";
}
