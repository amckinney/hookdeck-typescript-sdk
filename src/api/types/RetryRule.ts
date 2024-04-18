/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hookdeck from "../index";

export interface RetryRule {
    type: "retry";
    strategy: Hookdeck.RetryStrategy;
    /** Time in MS between each retry */
    interval?: number;
    /** Maximum number of retries to attempt */
    count?: number;
}
