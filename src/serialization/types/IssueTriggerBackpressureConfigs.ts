/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";
import { IssueTriggerBackpressureDelay } from "./IssueTriggerBackpressureDelay";
import { IssueTriggerBackpressureConfigsDestinations } from "./IssueTriggerBackpressureConfigsDestinations";

export const IssueTriggerBackpressureConfigs: core.serialization.ObjectSchema<
    serializers.IssueTriggerBackpressureConfigs.Raw,
    Hookdeck.IssueTriggerBackpressureConfigs
> = core.serialization.object({
    delay: IssueTriggerBackpressureDelay,
    destinations: IssueTriggerBackpressureConfigsDestinations,
});

export declare namespace IssueTriggerBackpressureConfigs {
    interface Raw {
        delay: IssueTriggerBackpressureDelay.Raw;
        destinations: IssueTriggerBackpressureConfigsDestinations.Raw;
    }
}
