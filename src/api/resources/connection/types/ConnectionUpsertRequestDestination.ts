/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hookdeck from "../../../index";

/**
 * Destination input object
 */
export interface ConnectionUpsertRequestDestination {
    /** Name for the destination */
    name: string;
    /** Description for the destination */
    description?: string;
    /** Endpoint of the destination */
    url?: string;
    /** Path for the CLI destination */
    cliPath?: string;
    /** Period to rate limit attempts */
    rateLimitPeriod?: Hookdeck.ConnectionUpsertRequestDestinationRateLimitPeriod;
    /** Limit event attempts to receive per period */
    rateLimit?: number;
    httpMethod?: Hookdeck.DestinationHttpMethod;
    authMethod?: Hookdeck.DestinationAuthMethodConfig;
    pathForwardingDisabled?: boolean;
}
