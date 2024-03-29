/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";
import { DestinationAuthMethodCustomSignatureConfig } from "./DestinationAuthMethodCustomSignatureConfig";

export const AuthCustomSignature: core.serialization.ObjectSchema<
    serializers.AuthCustomSignature.Raw,
    Hookdeck.AuthCustomSignature
> = core.serialization.object({
    config: DestinationAuthMethodCustomSignatureConfig,
});

export declare namespace AuthCustomSignature {
    interface Raw {
        config: DestinationAuthMethodCustomSignatureConfig.Raw;
    }
}
