/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";
import { VerificationEbayType } from "./VerificationEbayType";
import { VerificationEbayConfigs } from "./VerificationEbayConfigs";

export const VerificationEbay: core.serialization.ObjectSchema<
    serializers.VerificationEbay.Raw,
    Hookdeck.VerificationEbay
> = core.serialization.object({
    type: VerificationEbayType,
    configs: VerificationEbayConfigs.optional(),
});

export declare namespace VerificationEbay {
    interface Raw {
        type: VerificationEbayType.Raw;
        configs?: VerificationEbayConfigs.Raw | null;
    }
}
