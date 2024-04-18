/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";

export const ListCustomDomainSchemaItemOwnershipVerification: core.serialization.ObjectSchema<
    serializers.ListCustomDomainSchemaItemOwnershipVerification.Raw,
    Hookdeck.ListCustomDomainSchemaItemOwnershipVerification
> = core.serialization.object({
    type: core.serialization.string().optional(),
    name: core.serialization.string().optional(),
    value: core.serialization.string().optional(),
});

export declare namespace ListCustomDomainSchemaItemOwnershipVerification {
    interface Raw {
        type?: string | null;
        name?: string | null;
        value?: string | null;
    }
}
