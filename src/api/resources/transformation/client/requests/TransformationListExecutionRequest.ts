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
 *         logLevel: Hookdeck.TransformationListExecutionRequestLogLevel.Debug,
 *         webhookId: "string",
 *         issueId: "string",
 *         createdAt: new Date("2024-01-15T09:30:00.000Z"),
 *         orderBy: Hookdeck.TransformationListExecutionRequestOrderBy.CreatedAt,
 *         dir: Hookdeck.TransformationListExecutionRequestDir.Asc,
 *         limit: 1,
 *         next: "string",
 *         prev: "string"
 *     }
 *
 * @example
 *     {
 *         logLevel: Hookdeck.TransformationListExecutionRequestLogLevel.Debug,
 *         webhookId: "string",
 *         issueId: "string",
 *         createdAt: new Date("2024-01-15T09:30:00.000Z"),
 *         orderBy: Hookdeck.TransformationListExecutionRequestOrderBy.CreatedAt,
 *         dir: Hookdeck.TransformationListExecutionRequestDir.Asc,
 *         limit: 1,
 *         next: "string",
 *         prev: "string"
 *     }
 *
 * @example
 *     {
 *         logLevel: Hookdeck.TransformationListExecutionRequestLogLevel.Debug,
 *         webhookId: "string",
 *         issueId: "string",
 *         createdAt: new Date("2024-01-15T09:30:00.000Z"),
 *         orderBy: Hookdeck.TransformationListExecutionRequestOrderBy.CreatedAt,
 *         dir: Hookdeck.TransformationListExecutionRequestDir.Asc,
 *         limit: 1,
 *         next: "string",
 *         prev: "string"
 *     }
 */
export interface TransformationListExecutionRequest {
    logLevel?: Hookdeck.TransformationListExecutionRequestLogLevel;
    webhookId?: string;
    issueId?: string;
    createdAt?: Date;
    orderBy?: Hookdeck.TransformationListExecutionRequestOrderBy;
    dir?: Hookdeck.TransformationListExecutionRequestDir;
    limit?: number;
    next?: string;
    prev?: string;
}
