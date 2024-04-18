/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hookdeck from "../../../../index";

/**
 * @example
 *     {}
 *
 * @example
 *     {
 *         id: "string",
 *         name: "string",
 *         disabled: true,
 *         disabledAt: new Date("2024-01-15T09:30:00.000Z"),
 *         url: "string",
 *         cliPath: "string",
 *         orderBy: Hookdeck.DestinationListRequestOrderBy.CreatedAt,
 *         dir: Hookdeck.DestinationListRequestDir.Asc,
 *         limit: 1,
 *         next: "string",
 *         prev: "string"
 *     }
 *
 * @example
 *     {
 *         id: "string",
 *         name: "string",
 *         disabled: true,
 *         disabledAt: new Date("2024-01-15T09:30:00.000Z"),
 *         url: "string",
 *         cliPath: "string",
 *         orderBy: Hookdeck.DestinationListRequestOrderBy.CreatedAt,
 *         dir: Hookdeck.DestinationListRequestDir.Asc,
 *         limit: 1,
 *         next: "string",
 *         prev: "string"
 *     }
 *
 * @example
 *     {
 *         id: "string",
 *         name: "string",
 *         disabled: true,
 *         disabledAt: new Date("2024-01-15T09:30:00.000Z"),
 *         url: "string",
 *         cliPath: "string",
 *         orderBy: Hookdeck.DestinationListRequestOrderBy.CreatedAt,
 *         dir: Hookdeck.DestinationListRequestDir.Asc,
 *         limit: 1,
 *         next: "string",
 *         prev: "string"
 *     }
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
