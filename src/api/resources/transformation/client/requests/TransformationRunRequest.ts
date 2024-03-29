/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hookdeck from "../../../..";

/**
 * @example
 *     {}
 */
export interface TransformationRunRequest {
    /** Key-value environment variables to be passed to the transformation */
    env?: Record<string, string>;
    /** ID of the connection to use for the execution `context` */
    webhookId?: string;
    /** JavaScript code to be executed */
    code?: string;
    /** Transformation ID */
    transformationId?: string;
    /** Request input to use for the transformation execution */
    request?: Hookdeck.TransformationRunRequestRequest;
    eventId?: string;
}
