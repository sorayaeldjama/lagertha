/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ErrorObject } from '../models/ErrorObject';
import type { LinkEditPassword } from '../models/LinkEditPassword';
import type { LinkInput } from '../models/LinkInput';
import type { LinkOutput } from '../models/LinkOutput';
import type { LinkSendInput } from '../models/LinkSendInput';
import type { ListDto_for_LinkCustomerSuccessOutput } from '../models/ListDto_for_LinkCustomerSuccessOutput';
import type { ListDto_for_LinkOpenningOutput } from '../models/ListDto_for_LinkOpenningOutput';
import type { ListDto_for_LinkOutput } from '../models/ListDto_for_LinkOutput';
import type { ListDto_for_LinkSendOutput } from '../models/ListDto_for_LinkSendOutput';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class LinkService {

    /**
     * (ROLE_USER) get links list
     * get the user links
     * @param page
     * @param limit
     * @returns ListDto_for_LinkOutput
     * @returns string
     * @throws ApiError
     */
    public static linkControllerGetLinks(
        page?: number | null,
        limit?: number | null,
    ): CancelablePromise<ListDto_for_LinkOutput | string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/link',
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }

    /**
     * (ROLE_DEVICE, ROLE_USER) create link
     * create a link
     * @param requestBody
     * @returns LinkOutput
     * @returns any
     * @throws ApiError
     */
    public static linkControllerPostLink(
        requestBody: LinkInput,
    ): CancelablePromise<LinkOutput | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/link',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * (ROLE_USER, ROLE_LINK) get link informations
     * get
     * @param linkUuid
     * @returns LinkOutput
     * @returns ErrorObject
     * @throws ApiError
     */
    public static linkControllerGetLink(
        linkUuid: string,
    ): CancelablePromise<LinkOutput | ErrorObject> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/link/{link_uuid}',
            path: {
                'link_uuid': linkUuid,
            },
        });
    }

    /**
     * (ROLE_USER) Delete link
     * delete selected link
     * @param linkUuid
     * @returns string
     * @throws ApiError
     */
    public static linkControllerDeleteLink(
        linkUuid: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/link/{link_uuid}',
            path: {
                'link_uuid': linkUuid,
            },
        });
    }

    /**
     * (ROLE_USER) get link informations
     * get the list of opennings
     * @param linkUuid
     * @param page
     * @param limit
     * @returns ListDto_for_LinkOpenningOutput
     * @returns ErrorObject
     * @throws ApiError
     */
    public static linkControllerGetLinkOpennings(
        linkUuid: string,
        page?: number | null,
        limit?: number | null,
    ): CancelablePromise<ListDto_for_LinkOpenningOutput | ErrorObject> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/link/{link_uuid}/opennings',
            path: {
                'link_uuid': linkUuid,
            },
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }

    /**
     * (ROLE_USER, ROLE_LINK) get link informations
     * get
     * @param linkId
     * @param requestBody
     * @returns LinkOutput
     * @returns ErrorObject
     * @throws ApiError
     */
    public static linkControllerSendLink(
        linkId: string,
        requestBody: LinkSendInput,
    ): CancelablePromise<LinkOutput | ErrorObject> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/link/{link_id}/send',
            path: {
                'link_id': linkId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * (ROLE_USER) get link informations
     * get
     * @param linkUuid
     * @param requestBody
     * @returns LinkOutput
     * @returns ErrorObject
     * @throws ApiError
     */
    public static linkControllerEditLinkOpennings(
        linkUuid: string,
        requestBody: LinkEditPassword,
    ): CancelablePromise<LinkOutput | ErrorObject> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/link/{link_uuid}/password',
            path: {
                'link_uuid': linkUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * (ROLE_USER) get links list
     * get the user links
     * @param page
     * @param limit
     * @returns ListDto_for_LinkCustomerSuccessOutput
     * @returns ErrorObject
     * @throws ApiError
     */
    public static linkControllerGetLinksCustomerSuccess(
        page?: number | null,
        limit?: number | null,
    ): CancelablePromise<ListDto_for_LinkCustomerSuccessOutput | ErrorObject> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/link/customer_success',
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }

    /**
     * (ROLE_USER) get link informations
     * get the list of email sent
     * @param linkUuid
     * @param page
     * @param limit
     * @returns ListDto_for_LinkSendOutput
     * @returns ErrorObject
     * @throws ApiError
     */
    public static linkControllerGetLinkSent(
        linkUuid: string,
        page?: number | null,
        limit?: number | null,
    ): CancelablePromise<ListDto_for_LinkSendOutput | ErrorObject> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/link/{link_uuid}/send',
            path: {
                'link_uuid': linkUuid,
            },
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }

}
