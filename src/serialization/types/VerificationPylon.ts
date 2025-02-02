/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";
import { VerificationPylonType } from "./VerificationPylonType";
import { VerificationPylonConfigs } from "./VerificationPylonConfigs";

export const VerificationPylon: core.serialization.ObjectSchema<
    serializers.VerificationPylon.Raw,
    Hookdeck.VerificationPylon
> = core.serialization.object({
    type: VerificationPylonType,
    configs: VerificationPylonConfigs.optional(),
});

export declare namespace VerificationPylon {
    interface Raw {
        type: VerificationPylonType.Raw;
        configs?: VerificationPylonConfigs.Raw | null;
    }
}
