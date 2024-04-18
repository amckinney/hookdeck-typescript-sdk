/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";
import { ListCustomDomainSchemaItemSsl } from "./ListCustomDomainSchemaItemSsl";
import { ListCustomDomainSchemaItemOwnershipVerification } from "./ListCustomDomainSchemaItemOwnershipVerification";

export const ListCustomDomainSchemaItem: core.serialization.ObjectSchema<
    serializers.ListCustomDomainSchemaItem.Raw,
    Hookdeck.ListCustomDomainSchemaItem
> = core.serialization.object({
    id: core.serialization.string().optional(),
    hostname: core.serialization.string().optional(),
    status: core.serialization.string().optional(),
    ssl: ListCustomDomainSchemaItemSsl.optional(),
    verificationErrors: core.serialization.property(
        "verification_errors",
        core.serialization.list(core.serialization.string()).optional()
    ),
    ownershipVerification: core.serialization.property(
        "ownership_verification",
        ListCustomDomainSchemaItemOwnershipVerification.optional()
    ),
    createdAt: core.serialization.property("created_at", core.serialization.string().optional()),
});

export declare namespace ListCustomDomainSchemaItem {
    interface Raw {
        id?: string | null;
        hostname?: string | null;
        status?: string | null;
        ssl?: ListCustomDomainSchemaItemSsl.Raw | null;
        verification_errors?: string[] | null;
        ownership_verification?: ListCustomDomainSchemaItemOwnershipVerification.Raw | null;
        created_at?: string | null;
    }
}
