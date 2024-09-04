/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserGroupInput } from '../models/UserGroupInput';
import type { UserGroupOuput } from '../models/UserGroupOuput';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserGroupService {

    /**
     * (ROLE_ADMIN) create user group
     * create a user group
     * @param requestBody
     * @returns UserGroupOuput
     * @returns any
     * @throws ApiError
     */
    public static userGroupControllerPostUserGroup(
        requestBody: UserGroupInput,
    ): CancelablePromise<UserGroupOuput | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user_group',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
