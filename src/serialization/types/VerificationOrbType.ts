/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";

export const VerificationOrbType: core.serialization.Schema<
    serializers.VerificationOrbType.Raw,
    Hookdeck.VerificationOrbType
> = core.serialization.enum_(["orb"]);

export declare namespace VerificationOrbType {
    type Raw = "orb";
}
