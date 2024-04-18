/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hookdeck from "../index";

/**
 * Delivery issue
 */
export interface DeliveryIssueWithData {
    /** Issue ID */
    id: string;
    /** ID of the workspace */
    teamId: string;
    status: Hookdeck.IssueStatus;
    /** ISO timestamp for when the issue was last opened */
    openedAt: Date;
    /** ISO timestamp for when the issue was first opened */
    firstSeenAt: Date;
    /** ISO timestamp for when the issue last occured */
    lastSeenAt: Date;
    /** Deprecated, will always be set to null */
    lastUpdatedBy?: string;
    /** ISO timestamp for when the issue was dismissed */
    dismissedAt?: Date;
    autoResolvedAt?: Date;
    mergedWith?: string;
    /** ISO timestamp for when the issue was last updated */
    updatedAt: string;
    /** ISO timestamp for when the issue was created */
    createdAt: string;
    aggregationKeys: Hookdeck.DeliveryIssueAggregationKeys;
    reference: Hookdeck.DeliveryIssueReference;
    data?: Hookdeck.DeliveryIssueData;
}
