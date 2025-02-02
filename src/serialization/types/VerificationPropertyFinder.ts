/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";
import { VerificationPropertyFinderConfigs } from "./VerificationPropertyFinderConfigs";

export const VerificationPropertyFinder: core.serialization.ObjectSchema<
    serializers.VerificationPropertyFinder.Raw,
    Hookdeck.VerificationPropertyFinder
> = core.serialization.object({
    type: core.serialization.string(),
    configs: VerificationPropertyFinderConfigs.optional(),
});

export declare namespace VerificationPropertyFinder {
    interface Raw {
        type: string;
        configs?: VerificationPropertyFinderConfigs.Raw | null;
    }
}
