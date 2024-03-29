/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as Hookdeck from "../../../../../api";
import * as core from "../../../../../core";
import { IssueType } from "../../../../types/IssueType";
import { IssueTriggerUpsertRequestConfigs } from "../../types/IssueTriggerUpsertRequestConfigs";
import { IssueTriggerChannels } from "../../../../types/IssueTriggerChannels";

export const IssueTriggerUpsertRequest: core.serialization.Schema<
    serializers.IssueTriggerUpsertRequest.Raw,
    Hookdeck.IssueTriggerUpsertRequest
> = core.serialization.object({
    type: IssueType,
    configs: IssueTriggerUpsertRequestConfigs.optional(),
    channels: IssueTriggerChannels.optional(),
    name: core.serialization.string(),
});

export declare namespace IssueTriggerUpsertRequest {
    interface Raw {
        type: IssueType.Raw;
        configs?: IssueTriggerUpsertRequestConfigs.Raw | null;
        channels?: IssueTriggerChannels.Raw | null;
        name: string;
    }
}
