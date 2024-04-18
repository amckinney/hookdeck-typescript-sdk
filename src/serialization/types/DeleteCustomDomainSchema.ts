/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";

export const DeleteCustomDomainSchema: core.serialization.ObjectSchema<
    serializers.DeleteCustomDomainSchema.Raw,
    Hookdeck.DeleteCustomDomainSchema
> = core.serialization.object({
    id: core.serialization.string(),
});

export declare namespace DeleteCustomDomainSchema {
    interface Raw {
        id: string;
    }
}
