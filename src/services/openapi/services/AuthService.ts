/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CredentialInput } from '../models/CredentialInput';
import type { CredentialOutput } from '../models/CredentialOutput';
import type { CredentialRefreshInput } from '../models/CredentialRefreshInput';
import type { ErrorObject } from '../models/ErrorObject';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuthService {

    /**
     * user authentication end point
     * Returns an access_token and refresh_token
     * @param requestBody
     * @returns CredentialOutput
     * @returns any
     * @throws ApiError
     */
    public static authControllerSignup(
        requestBody: CredentialInput,
    ): CancelablePromise<CredentialOutput | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/story/postUser',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * user refresh token end point
     * User provide his refresh token Returns an access_token and refresh_token
     * @param requestBody
     * @returns CredentialOutput
     * @returns ErrorObject
     * @throws ApiError
     */
    public static authControllerRefresh(
        requestBody: CredentialRefreshInput,
    ): CancelablePromise<CredentialOutput | ErrorObject> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/refresh',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
