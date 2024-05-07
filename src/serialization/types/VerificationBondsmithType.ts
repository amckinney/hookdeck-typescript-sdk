/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";

export const VerificationBondsmithType: core.serialization.Schema<
    serializers.VerificationBondsmithType.Raw,
    Hookdeck.VerificationBondsmithType
> = core.serialization.enum_(["bondsmith"]);

export declare namespace VerificationBondsmithType {
    type Raw = "bondsmith";
}
