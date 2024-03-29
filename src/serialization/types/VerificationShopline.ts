/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";
import { VerificationShoplineType } from "./VerificationShoplineType";
import { VerificationShoplineConfigs } from "./VerificationShoplineConfigs";

export const VerificationShopline: core.serialization.ObjectSchema<
    serializers.VerificationShopline.Raw,
    Hookdeck.VerificationShopline
> = core.serialization.object({
    type: VerificationShoplineType,
    configs: VerificationShoplineConfigs.optional(),
});

export declare namespace VerificationShopline {
    interface Raw {
        type: VerificationShoplineType.Raw;
        configs?: VerificationShoplineConfigs.Raw | null;
    }
}
