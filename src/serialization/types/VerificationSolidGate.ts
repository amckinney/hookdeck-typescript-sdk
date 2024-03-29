/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";
import { VerificationSolidGateType } from "./VerificationSolidGateType";
import { VerificationSolidGateConfigs } from "./VerificationSolidGateConfigs";

export const VerificationSolidGate: core.serialization.ObjectSchema<
    serializers.VerificationSolidGate.Raw,
    Hookdeck.VerificationSolidGate
> = core.serialization.object({
    type: VerificationSolidGateType,
    configs: VerificationSolidGateConfigs.optional(),
});

export declare namespace VerificationSolidGate {
    interface Raw {
        type: VerificationSolidGateType.Raw;
        configs?: VerificationSolidGateConfigs.Raw | null;
    }
}
