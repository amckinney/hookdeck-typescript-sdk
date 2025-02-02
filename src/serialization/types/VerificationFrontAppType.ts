/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";

export const VerificationFrontAppType: core.serialization.Schema<
    serializers.VerificationFrontAppType.Raw,
    Hookdeck.VerificationFrontAppType
> = core.serialization.enum_(["frontapp"]);

export declare namespace VerificationFrontAppType {
    type Raw = "frontapp";
}
