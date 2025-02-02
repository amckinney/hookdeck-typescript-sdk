/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";
import { TransformFullTransformation } from "./TransformFullTransformation";

export const TransformFull: core.serialization.ObjectSchema<serializers.TransformFull.Raw, Hookdeck.TransformFull> =
    core.serialization.object({
        type: core.serialization.stringLiteral("transform"),
        transformationId: core.serialization.property("transformation_id", core.serialization.string().optional()),
        transformation: TransformFullTransformation.optional(),
    });

export declare namespace TransformFull {
    interface Raw {
        type: "transform";
        transformation_id?: string | null;
        transformation?: TransformFullTransformation.Raw | null;
    }
}
