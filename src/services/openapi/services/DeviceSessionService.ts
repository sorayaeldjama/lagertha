/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ErrorObject } from '../models/ErrorObject';
import type { ListDto_for_DeviceSessionOutput } from '../models/ListDto_for_DeviceSessionOutput';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DeviceSessionService {

    /**
     * (ROLE_USER) get link informations
     * get the list of opennings
     * @param page
     * @param limit
     * @returns ListDto_for_DeviceSessionOutput
     * @returns ErrorObject
     * @throws ApiError
     */
    public static deviceSessionControllerGetDeviceSession(
        page?: number | null,
        limit?: number | null,
    ): CancelablePromise<ListDto_for_DeviceSessionOutput | ErrorObject> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/device_session',
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }

}
