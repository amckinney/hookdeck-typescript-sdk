/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Hookdeck from "../../../../api";
import * as core from "../../../../core";

export const ConnectionDeleteResponse: core.serialization.ObjectSchema<
    serializers.ConnectionDeleteResponse.Raw,
    Hookdeck.ConnectionDeleteResponse
> = core.serialization.object({
    id: core.serialization.string(),
});

export declare namespace ConnectionDeleteResponse {
    interface Raw {
        id: string;
    }
}
