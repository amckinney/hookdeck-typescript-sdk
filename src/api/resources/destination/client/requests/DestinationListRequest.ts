/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hookdeck from "../../../..";

/**
 * @example
 *     {}
 */
export interface DestinationListRequest {
    id?: string;
    name?: string;
    disabled?: boolean;
    disabledAt?: Date;
    url?: string;
    cliPath?: string;
    orderBy?: Hookdeck.DestinationListRequestOrderBy;
    dir?: Hookdeck.DestinationListRequestDir;
    limit?: number;
    next?: string;
    prev?: string;
}
