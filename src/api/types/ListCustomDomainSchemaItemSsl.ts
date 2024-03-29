/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hookdeck from "..";

export interface ListCustomDomainSchemaItemSsl {
    id?: string;
    type?: string;
    method?: string;
    status?: string;
    txtName?: string;
    txtValue?: string;
    validationRecords?: Hookdeck.ListCustomDomainSchemaItemSslValidationRecordsItem[];
    dcvDelegationRecords?: Hookdeck.ListCustomDomainSchemaItemSslDcvDelegationRecordsItem[];
    settings?: Hookdeck.ListCustomDomainSchemaItemSslSettings;
    bundleMethod?: string;
    wildcard?: boolean;
    certificateAuthority?: string;
}
