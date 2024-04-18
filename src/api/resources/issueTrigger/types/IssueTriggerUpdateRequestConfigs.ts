/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hookdeck from "../../../index";

/**
 * Configuration object for the specific issue type selected
 */
export type IssueTriggerUpdateRequestConfigs =
    | Hookdeck.IssueTriggerDeliveryConfigs
    | Hookdeck.IssueTriggerTransformationConfigs
    | Hookdeck.IssueTriggerBackpressureConfigs;
