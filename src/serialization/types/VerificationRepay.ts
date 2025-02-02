/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";
import { VerificationRepayType } from "./VerificationRepayType";
import { VerificationRepayConfigs } from "./VerificationRepayConfigs";

export const VerificationRepay: core.serialization.ObjectSchema<
    serializers.VerificationRepay.Raw,
    Hookdeck.VerificationRepay
> = core.serialization.object({
    type: VerificationRepayType,
    configs: VerificationRepayConfigs.optional(),
});

export declare namespace VerificationRepay {
    interface Raw {
        type: VerificationRepayType.Raw;
        configs?: VerificationRepayConfigs.Raw | null;
    }
}
