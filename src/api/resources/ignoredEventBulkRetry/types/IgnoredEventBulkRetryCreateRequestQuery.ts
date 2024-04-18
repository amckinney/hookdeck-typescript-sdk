/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hookdeck from "../../../index";

/**
 * Filter by the bulk retry ignored event query object
 */
export interface IgnoredEventBulkRetryCreateRequestQuery {
    /** The cause of the ignored event */
    cause?: Hookdeck.IgnoredEventBulkRetryCreateRequestQueryCause;
    /** Connection ID of the ignored event */
    webhookId?: Hookdeck.IgnoredEventBulkRetryCreateRequestQueryWebhookId;
    /** The associated transformation ID (only applicable to the cause `TRANSFORMATION_FAILED`) */
    transformationId?: string;
}
