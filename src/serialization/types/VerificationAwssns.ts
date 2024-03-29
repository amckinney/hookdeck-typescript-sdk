/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";
import { VerificationAwssnsType } from "./VerificationAwssnsType";
import { VerificationAwssnsConfigs } from "./VerificationAwssnsConfigs";

export const VerificationAwssns: core.serialization.ObjectSchema<
    serializers.VerificationAwssns.Raw,
    Hookdeck.VerificationAwssns
> = core.serialization.object({
    type: VerificationAwssnsType,
    configs: VerificationAwssnsConfigs.optional(),
});

export declare namespace VerificationAwssns {
    interface Raw {
        type: VerificationAwssnsType.Raw;
        configs?: VerificationAwssnsConfigs.Raw | null;
    }
}
