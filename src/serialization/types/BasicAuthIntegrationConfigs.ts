/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";

export const BasicAuthIntegrationConfigs: core.serialization.ObjectSchema<
    serializers.BasicAuthIntegrationConfigs.Raw,
    Hookdeck.BasicAuthIntegrationConfigs
> = core.serialization.object({
    username: core.serialization.string(),
    password: core.serialization.string(),
});

export declare namespace BasicAuthIntegrationConfigs {
    interface Raw {
        username: string;
        password: string;
    }
}
