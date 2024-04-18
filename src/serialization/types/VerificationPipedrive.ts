/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";
import { VerificationPipedriveType } from "./VerificationPipedriveType";
import { VerificationPipedriveConfigs } from "./VerificationPipedriveConfigs";

export const VerificationPipedrive: core.serialization.ObjectSchema<
    serializers.VerificationPipedrive.Raw,
    Hookdeck.VerificationPipedrive
> = core.serialization.object({
    type: VerificationPipedriveType,
    configs: VerificationPipedriveConfigs.optional(),
});

export declare namespace VerificationPipedrive {
    interface Raw {
        type: VerificationPipedriveType.Raw;
        configs?: VerificationPipedriveConfigs.Raw | null;
    }
}
