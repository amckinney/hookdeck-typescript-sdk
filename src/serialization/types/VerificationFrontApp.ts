/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";
import { VerificationFrontAppType } from "./VerificationFrontAppType";
import { VerificationFrontAppConfigs } from "./VerificationFrontAppConfigs";

export const VerificationFrontApp: core.serialization.ObjectSchema<
    serializers.VerificationFrontApp.Raw,
    Hookdeck.VerificationFrontApp
> = core.serialization.object({
    type: VerificationFrontAppType,
    configs: VerificationFrontAppConfigs.optional(),
});

export declare namespace VerificationFrontApp {
    interface Raw {
        type: VerificationFrontAppType.Raw;
        configs?: VerificationFrontAppConfigs.Raw | null;
    }
}
