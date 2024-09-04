/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContactInput } from '../models/ContactInput';
import type { ContactOutput } from '../models/ContactOutput';
import type { ErrorObject } from '../models/ErrorObject';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ContactService {

    /**
     * (ROLE_ADMIN) create a new product
     * crreate a new product
     * @param requestBody
     * @returns ContactOutput
     * @returns ErrorObject
     * @throws ApiError
     */
    public static contactControllerNewContact(
        requestBody: ContactInput,
    ): CancelablePromise<ContactOutput | ErrorObject> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/contact',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
