/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";
import { VerificationTrelloType } from "./VerificationTrelloType";
import { VerificationTrelloConfigs } from "./VerificationTrelloConfigs";

export const VerificationTrello: core.serialization.ObjectSchema<
    serializers.VerificationTrello.Raw,
    Hookdeck.VerificationTrello
> = core.serialization.object({
    type: VerificationTrelloType,
    configs: VerificationTrelloConfigs.optional(),
});

export declare namespace VerificationTrello {
    interface Raw {
        type: VerificationTrelloType.Raw;
        configs?: VerificationTrelloConfigs.Raw | null;
    }
}
