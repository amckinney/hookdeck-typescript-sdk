/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Hookdeck from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace IgnoredEventBulkRetry {
    interface Options {
        environment?: core.Supplier<environments.HookdeckEnvironment | string>;
        token: core.Supplier<core.BearerToken>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class IgnoredEventBulkRetry {
    constructor(protected readonly _options: IgnoredEventBulkRetry.Options) {}

    /**
     *
     * @throws {@link Hookdeck.BadRequestError}
     * @throws {@link Hookdeck.UnprocessableEntityError}
     *
     * @example
     *     await hookdeck.ignoredEventBulkRetry.list()
     *
     * @example
     *     await hookdeck.ignoredEventBulkRetry.list({
     *         cancelledAt: new Date("2024-01-15T09:30:00.000Z"),
     *         completedAt: new Date("2024-01-15T09:30:00.000Z"),
     *         createdAt: new Date("2024-01-15T09:30:00.000Z"),
     *         id: "string",
     *         queryPartialMatch: true,
     *         inProgress: true,
     *         orderBy: Hookdeck.IgnoredEventBulkRetryListRequestOrderBy.CreatedAt,
     *         dir: Hookdeck.IgnoredEventBulkRetryListRequestDir.Asc,
     *         limit: 1,
     *         next: "string",
     *         prev: "string"
     *     })
     */
    public async list(
        request: Hookdeck.IgnoredEventBulkRetryListRequest = {},
        requestOptions?: IgnoredEventBulkRetry.RequestOptions
    ): Promise<Hookdeck.BatchOperationPaginatedResult> {
        const {
            cancelledAt,
            completedAt,
            createdAt,
            id,
            queryPartialMatch,
            inProgress,
            orderBy,
            dir,
            limit,
            next,
            prev,
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (cancelledAt != null) {
            _queryParams["cancelled_at"] = cancelledAt.toISOString();
        }

        if (completedAt != null) {
            _queryParams["completed_at"] = completedAt.toISOString();
        }

        if (createdAt != null) {
            _queryParams["created_at"] = createdAt.toISOString();
        }

        if (id != null) {
            _queryParams["id"] = id;
        }

        if (queryPartialMatch != null) {
            _queryParams["query_partial_match"] = queryPartialMatch.toString();
        }

        if (inProgress != null) {
            _queryParams["in_progress"] = inProgress.toString();
        }

        if (orderBy != null) {
            _queryParams["order_by"] = orderBy;
        }

        if (dir != null) {
            _queryParams["dir"] = dir;
        }

        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (next != null) {
            _queryParams["next"] = next;
        }

        if (prev != null) {
            _queryParams["prev"] = prev;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HookdeckEnvironment.Default,
                "bulk/ignored-events/retry"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@hookdeck/sdk",
                "X-Fern-SDK-Version": "0.2.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.BatchOperationPaginatedResult.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Hookdeck.BadRequestError(
                        await serializers.ApiErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 422:
                    throw new Hookdeck.UnprocessableEntityError(
                        await serializers.ApiErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HookdeckError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HookdeckError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HookdeckTimeoutError();
            case "unknown":
                throw new errors.HookdeckError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     *
     * @throws {@link Hookdeck.BadRequestError}
     * @throws {@link Hookdeck.UnprocessableEntityError}
     *
     * @example
     *     await hookdeck.ignoredEventBulkRetry.create()
     */
    public async create(
        request: Hookdeck.IgnoredEventBulkRetryCreateRequest = {},
        requestOptions?: IgnoredEventBulkRetry.RequestOptions
    ): Promise<Hookdeck.BatchOperation> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HookdeckEnvironment.Default,
                "bulk/ignored-events/retry"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@hookdeck/sdk",
                "X-Fern-SDK-Version": "0.2.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.IgnoredEventBulkRetryCreateRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.BatchOperation.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Hookdeck.BadRequestError(
                        await serializers.ApiErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 422:
                    throw new Hookdeck.UnprocessableEntityError(
                        await serializers.ApiErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HookdeckError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HookdeckError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HookdeckTimeoutError();
            case "unknown":
                throw new errors.HookdeckError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     *
     * @throws {@link Hookdeck.BadRequestError}
     * @throws {@link Hookdeck.UnprocessableEntityError}
     *
     * @example
     *     await hookdeck.ignoredEventBulkRetry.plan()
     */
    public async plan(
        requestOptions?: IgnoredEventBulkRetry.RequestOptions
    ): Promise<Hookdeck.IgnoredEventBulkRetryPlanResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HookdeckEnvironment.Default,
                "bulk/ignored-events/retry/plan"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@hookdeck/sdk",
                "X-Fern-SDK-Version": "0.2.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.IgnoredEventBulkRetryPlanResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Hookdeck.BadRequestError(
                        await serializers.ApiErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 422:
                    throw new Hookdeck.UnprocessableEntityError(
                        await serializers.ApiErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HookdeckError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HookdeckError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HookdeckTimeoutError();
            case "unknown":
                throw new errors.HookdeckError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     *
     * @throws {@link Hookdeck.NotFoundError}
     *
     * @example
     *     await hookdeck.ignoredEventBulkRetry.retrieve("id")
     *
     * @example
     *     await hookdeck.ignoredEventBulkRetry.retrieve("string")
     */
    public async retrieve(
        id: string,
        requestOptions?: IgnoredEventBulkRetry.RequestOptions
    ): Promise<Hookdeck.BatchOperation> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HookdeckEnvironment.Default,
                `bulk/ignored-events/retry/${id}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@hookdeck/sdk",
                "X-Fern-SDK-Version": "0.2.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.BatchOperation.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new Hookdeck.NotFoundError(
                        await serializers.ApiErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HookdeckError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HookdeckError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HookdeckTimeoutError();
            case "unknown":
                throw new errors.HookdeckError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     *
     * @throws {@link Hookdeck.NotFoundError}
     *
     * @example
     *     await hookdeck.ignoredEventBulkRetry.cancel("id")
     *
     * @example
     *     await hookdeck.ignoredEventBulkRetry.cancel("string")
     */
    public async cancel(
        id: string,
        requestOptions?: IgnoredEventBulkRetry.RequestOptions
    ): Promise<Hookdeck.BatchOperation> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HookdeckEnvironment.Default,
                `bulk/ignored-events/retry/${id}/cancel`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@hookdeck/sdk",
                "X-Fern-SDK-Version": "0.2.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.BatchOperation.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new Hookdeck.NotFoundError(
                        await serializers.ApiErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HookdeckError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HookdeckError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HookdeckTimeoutError();
            case "unknown":
                throw new errors.HookdeckError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string> {
        return `Bearer ${await core.Supplier.get(this._options.token)}`;
    }
}
