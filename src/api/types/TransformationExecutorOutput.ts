/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hookdeck from "..";

export interface TransformationExecutorOutput {
    requestId?: string;
    transformationId?: string;
    executionId?: string;
    logLevel: Hookdeck.TransformationExecutionLogLevel;
    request?: Hookdeck.TransformationExecutorOutputRequest;
    console?: Hookdeck.ConsoleLine[];
}
