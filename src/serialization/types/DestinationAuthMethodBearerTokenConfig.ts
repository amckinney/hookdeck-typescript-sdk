/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";

export const DestinationAuthMethodBearerTokenConfig: core.serialization.ObjectSchema<
    serializers.DestinationAuthMethodBearerTokenConfig.Raw,
    Hookdeck.DestinationAuthMethodBearerTokenConfig
> = core.serialization.object({
    token: core.serialization.string(),
});

export declare namespace DestinationAuthMethodBearerTokenConfig {
    interface Raw {
        token: string;
    }
}
