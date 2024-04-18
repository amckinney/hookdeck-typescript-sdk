/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";
import { VerificationWorkOsType } from "./VerificationWorkOsType";
import { VerificationWorkOsConfigs } from "./VerificationWorkOsConfigs";

export const VerificationWorkOs: core.serialization.ObjectSchema<
    serializers.VerificationWorkOs.Raw,
    Hookdeck.VerificationWorkOs
> = core.serialization.object({
    type: VerificationWorkOsType,
    configs: VerificationWorkOsConfigs.optional(),
});

export declare namespace VerificationWorkOs {
    interface Raw {
        type: VerificationWorkOsType.Raw;
        configs?: VerificationWorkOsConfigs.Raw | null;
    }
}
