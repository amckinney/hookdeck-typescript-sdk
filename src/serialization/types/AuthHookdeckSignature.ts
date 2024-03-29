/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";
import { DestinationAuthMethodSignatureConfig } from "./DestinationAuthMethodSignatureConfig";

export const AuthHookdeckSignature: core.serialization.ObjectSchema<
    serializers.AuthHookdeckSignature.Raw,
    Hookdeck.AuthHookdeckSignature
> = core.serialization.object({
    config: DestinationAuthMethodSignatureConfig.optional(),
});

export declare namespace AuthHookdeckSignature {
    interface Raw {
        config?: DestinationAuthMethodSignatureConfig.Raw | null;
    }
}
