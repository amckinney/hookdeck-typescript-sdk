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
 *         status: Hookdeck.RequestListRequestStatus.Accepted,
 *         rejectionCause: Hookdeck.RequestRejectionCause.SourceDisabled,
 *         sourceId: "string",
 *         verified: true,
 *         searchTerm: "string",
 *         headers: "string",
 *         body: "string",
 *         parsedQuery: "string",
 *         path: "string",
 *         ignoredCount: 1,
 *         eventsCount: 1,
 *         ingestedAt: new Date("2024-01-15T09:30:00.000Z"),
 *         bulkRetryId: "string",
 *         include: "data",
 *         orderBy: Hookdeck.RequestListRequestOrderBy.IngestedAt,
 *         dir: Hookdeck.RequestListRequestDir.Asc,
 *         limit: 1,
 *         next: "string",
 *         prev: "string"
 *     }
 *
 * @example
 *     {
 *         id: "string",
 *         status: Hookdeck.RequestListRequestStatus.Accepted,
 *         rejectionCause: Hookdeck.RequestRejectionCause.SourceDisabled,
 *         sourceId: "string",
 *         verified: true,
 *         searchTerm: "string",
 *         headers: "string",
 *         body: "string",
 *         parsedQuery: "string",
 *         path: "string",
 *         ignoredCount: 1,
 *         eventsCount: 1,
 *         ingestedAt: new Date("2024-01-15T09:30:00.000Z"),
 *         bulkRetryId: "string",
 *         include: "data",
 *         orderBy: Hookdeck.RequestListRequestOrderBy.IngestedAt,
 *         dir: Hookdeck.RequestListRequestDir.Asc,
 *         limit: 1,
 *         next: "string",
 *         prev: "string"
 *     }
 *
 * @example
 *     {
 *         id: "string",
 *         status: Hookdeck.RequestListRequestStatus.Accepted,
 *         rejectionCause: Hookdeck.RequestRejectionCause.SourceDisabled,
 *         sourceId: "string",
 *         verified: true,
 *         searchTerm: "string",
 *         headers: "string",
 *         body: "string",
 *         parsedQuery: "string",
 *         path: "string",
 *         ignoredCount: 1,
 *         eventsCount: 1,
 *         ingestedAt: new Date("2024-01-15T09:30:00.000Z"),
 *         bulkRetryId: "string",
 *         include: "data",
 *         orderBy: Hookdeck.RequestListRequestOrderBy.IngestedAt,
 *         dir: Hookdeck.RequestListRequestDir.Asc,
 *         limit: 1,
 *         next: "string",
 *         prev: "string"
 *     }
 */
export interface RequestListRequest {
    id?: string;
    status?: Hookdeck.RequestListRequestStatus;
    rejectionCause?: Hookdeck.RequestRejectionCause;
    sourceId?: string;
    verified?: boolean;
    searchTerm?: string;
    headers?: string;
    body?: string;
    parsedQuery?: string;
    path?: string;
    ignoredCount?: number;
    eventsCount?: number;
    ingestedAt?: Date;
    bulkRetryId?: string;
    include?: "data";
    orderBy?: Hookdeck.RequestListRequestOrderBy;
    dir?: Hookdeck.RequestListRequestDir;
    limit?: number;
    next?: string;
    prev?: string;
}
