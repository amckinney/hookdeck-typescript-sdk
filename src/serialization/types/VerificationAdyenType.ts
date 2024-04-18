/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";

export const VerificationAdyenType: core.serialization.Schema<
    serializers.VerificationAdyenType.Raw,
    Hookdeck.VerificationAdyenType
> = core.serialization.enum_(["adyen"]);

export declare namespace VerificationAdyenType {
    type Raw = "adyen";
}
