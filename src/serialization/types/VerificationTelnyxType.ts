/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";

export const VerificationTelnyxType: core.serialization.Schema<
    serializers.VerificationTelnyxType.Raw,
    Hookdeck.VerificationTelnyxType
> = core.serialization.enum_(["telnyx"]);

export declare namespace VerificationTelnyxType {
    type Raw = "telnyx";
}
