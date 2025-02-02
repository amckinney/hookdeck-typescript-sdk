/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hookdeck from "../../../../index";

/**
 * @example
 *     {}
 *
 * @example
 *     {}
 *
 * @example
 *     {}
 *
 * @example
 *     {}
 */
export interface IssueTriggerUpdateRequest {
    /** Configuration object for the specific issue type selected */
    configs?: Hookdeck.IssueTriggerUpdateRequestConfigs;
    channels?: Hookdeck.IssueTriggerChannels;
    /** Date when the issue trigger was disabled */
    disabledAt?: Date;
    /** Optional unique name to use as reference when using the API */
    name?: string;
}
