/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";

export const AddCustomHostname: core.serialization.ObjectSchema<
    serializers.AddCustomHostname.Raw,
    Hookdeck.AddCustomHostname
> = core.serialization.object({
    hostname: core.serialization.string(),
});

export declare namespace AddCustomHostname {
    interface Raw {
        hostname: string;
    }
}
