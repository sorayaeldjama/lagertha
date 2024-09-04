/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DailyAnalyticOutput } from '../models/DailyAnalyticOutput';
import type { ErrorObject } from '../models/ErrorObject';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DailyAnalyticService {

    /**
     * (ROLE_CUSTOMER_SUCCESS) get analytics
     * get analytics
     * @returns DailyAnalyticOutput
     * @returns ErrorObject
     * @throws ApiError
     */
    public static dailyAnalyticControlerGetDailyAnalytics(): CancelablePromise<Array<DailyAnalyticOutput> | ErrorObject> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/daily-analytic',
        });
    }

}
