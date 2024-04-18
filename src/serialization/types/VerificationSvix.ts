/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";
import { VerificationSvixType } from "./VerificationSvixType";
import { VerificationSvixConfigs } from "./VerificationSvixConfigs";

export const VerificationSvix: core.serialization.ObjectSchema<
    serializers.VerificationSvix.Raw,
    Hookdeck.VerificationSvix
> = core.serialization.object({
    type: VerificationSvixType,
    configs: VerificationSvixConfigs.optional(),
});

export declare namespace VerificationSvix {
    interface Raw {
        type: VerificationSvixType.Raw;
        configs?: VerificationSvixConfigs.Raw | null;
    }
}
