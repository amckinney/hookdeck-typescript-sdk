/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hookdeck from "../../../../index";

/**
 * @example
 *     {}
 *
 * @example
 *     {}
 *
 * @example
 *     {}
 *
 * @example
 *     {}
 *
 * @example
 *     {}
 */
export interface DestinationUpdateRequest {
    /** Name for the destination */
    name?: string;
    /** Description for the destination */
    description?: string;
    /** Endpoint of the destination */
    url?: string;
    /** Path for the CLI destination */
    cliPath?: string;
    /** Period to rate limit attempts */
    rateLimitPeriod?: Hookdeck.DestinationUpdateRequestRateLimitPeriod;
    /** Limit event attempts to receive per period */
    rateLimit?: number;
    httpMethod?: Hookdeck.DestinationHttpMethod;
    authMethod?: Hookdeck.DestinationAuthMethodConfig;
    pathForwardingDisabled?: boolean;
}
