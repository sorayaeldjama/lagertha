/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ErrorObject } from '../models/ErrorObject';
import type { SystemInformationOutput } from '../models/SystemInformationOutput';
import type { SystemVersionOutput } from '../models/SystemVersionOutput';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SystemService {

    /**
     * (PUBLIC) retrieve list of application logs
     * get the current api version
     * @returns SystemVersionOutput
     * @throws ApiError
     */
    public static systemControllerGetVersion(): CancelablePromise<SystemVersionOutput> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/system/version',
        });
    }

    /**
     * (ROLE_ADMIN) retrieve system informations
     * user admin can get a paginate list of his application
     * @returns SystemInformationOutput
     * @returns ErrorObject
     * @throws ApiError
     */
    public static systemControllerGetSysInfo(): CancelablePromise<SystemInformationOutput | ErrorObject> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/system/info',
        });
    }

}
