/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hookdeck from "../../../..";

/**
 * @example
 *     {
 *         type: Hookdeck.IssueType.Delivery,
 *         name: "name"
 *     }
 */
export interface IssueTriggerUpsertRequest {
    type: Hookdeck.IssueType;
    /** Configuration object for the specific issue type selected */
    configs?: Hookdeck.IssueTriggerUpsertRequestConfigs;
    channels?: Hookdeck.IssueTriggerChannels;
    /** Required unique name to use as reference when using the API */
    name: string;
}
