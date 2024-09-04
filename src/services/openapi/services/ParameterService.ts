/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ErrorObject } from '../models/ErrorObject';
import type { ParameterOutput } from '../models/ParameterOutput';
import type { ParameterUpdateInput } from '../models/ParameterUpdateInput';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ParameterService {

    /**
     * (ROLE_USER) create parameters
     * get parameters
     * @returns ParameterOutput
     * @returns ErrorObject
     * @throws ApiError
     */
    public static parameterControlerGetParameters(): CancelablePromise<Array<ParameterOutput> | ErrorObject> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/parameter',
        });
    }

    /**
     * (ROLE_USER) update parameter
     * get parameters
     * @param requestBody
     * @returns ParameterOutput
     * @returns ErrorObject
     * @throws ApiError
     */
    public static parameterControlerUpdateParameter(
        requestBody: ParameterUpdateInput,
    ): CancelablePromise<ParameterOutput | ErrorObject> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/parameter',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
