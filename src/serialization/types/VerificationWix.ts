/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";
import { VerificationWixType } from "./VerificationWixType";
import { VerificationWixConfigs } from "./VerificationWixConfigs";

export const VerificationWix: core.serialization.ObjectSchema<
    serializers.VerificationWix.Raw,
    Hookdeck.VerificationWix
> = core.serialization.object({
    type: VerificationWixType,
    configs: VerificationWixConfigs.optional(),
});

export declare namespace VerificationWix {
    interface Raw {
        type: VerificationWixType.Raw;
        configs?: VerificationWixConfigs.Raw | null;
    }
}
