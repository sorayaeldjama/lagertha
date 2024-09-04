/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ErrorObject } from '../models/ErrorObject';
import type { ListDto_for_UserOutput } from '../models/ListDto_for_UserOutput';
import type { User2faActivateInput } from '../models/User2faActivateInput';
import type { User2faActivateOutput } from '../models/User2faActivateOutput';
import type { User2faCode } from '../models/User2faCode';
import type { UserCheckResetInput } from '../models/UserCheckResetInput';
import type { UserCoinsCount } from '../models/UserCoinsCount';
import type { UserOutput } from '../models/UserOutput';
import type { UserReinitToken } from '../models/UserReinitToken';
import type { UserResetInput } from '../models/UserResetInput';
import type { UserRolesInput } from '../models/UserRolesInput';
import type { UserStorageUsed } from '../models/UserStorageUsed';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import { UserInput } from '../models/UserInput';

export class UserService {
        /**
     * (ROLE_ADMIN, ROLE_SUPER_ADMIN) GET user list
     * retrieve the user's list
     * @param UserInput
     * @returns UserOutput
     * @returns any
     * @throws ApiError
     */
        public static userControllerPostUser(
            requestBody: UserInput,

        ): CancelablePromise<UserOutput | any> {
            return __request(OpenAPI, {
                method: 'POST',
                url: '/api/v1/story/postUser',
                mediaType: 'user/json',
                body: requestBody,

            });
        }

    /**
     * (ROLE_ADMIN, ROLE_SUPER_ADMIN) GET user list
     * retrieve the user's list
     * @param limit
     * @param page
     * @param query
     * @returns ListDto_for_UserOutput
     * @returns any
     * @throws ApiError
     */
    public static userControllerGetUsers(
        limit?: number | null,
        page?: number | null,
        query?: string | null,
    ): CancelablePromise<ListDto_for_UserOutput | any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user',
            query: {
                'limit': limit,
                'page': page,
                'query': query,
            },
        });
    }

    /**
     * (ROLE_ADMIN, ROLE_SUPER_ADMIN) delete user
     * delete the dedicated user
     * @returns boolean
     * @returns any
     * @throws ApiError
     */
    public static userControllerDeleteUser(): CancelablePromise<boolean | any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/user',
        });
    }

    /**
     * (ROLE_USER, ROLE_ADMIN, ROLE_SUPER_ADMIN) get the 2facode
     * if 2fa is not activated, get a unique code to activate 2fa
     * @returns User2faCode
     * @returns any
     * @throws ApiError
     */
    public static userControllerGet2FaCode(): CancelablePromise<User2faCode | any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/2fa/code',
        });
    }

    /**
     * (ROLE_USER, ROLE_ADMIN, ROLE_SUPER_ADMIN) activate 2fa
     * activate the 2fa auth on user account
     * @param requestBody
     * @returns User2faActivateOutput
     * @returns any
     * @throws ApiError
     */
    public static userControllerActivate2Fa(
        requestBody: User2faActivateInput,
    ): CancelablePromise<User2faActivateOutput | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/user/2fa/activate',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * (ROLE_USER) get storage in use
     * get the whole storage use by the user
     * @returns UserStorageUsed
     * @returns string
     * @throws ApiError
     */
    public static userControllerGetUserSpaceUse(): CancelablePromise<UserStorageUsed | string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/space_use',
        });
    }

    /**
     * (PUBLIC) send a reset code
     * send a reset code to the designited user_by email
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static userControllerSendResetCode(
        requestBody: UserResetInput,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/reset',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * (PUBLIC) send a reset code
     * send a reset code to the designited user_by email
     * @param requestBody
     * @returns UserReinitToken
     * @returns any
     * @throws ApiError
     */
    public static userControllerCheckResetCode(
        requestBody: UserCheckResetInput,
    ): CancelablePromise<UserReinitToken | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/check_reset_code',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * (ROLE_USER) get storage in use
     * get the whole storage use by the user
     * @returns UserCoinsCount
     * @returns ErrorObject
     * @throws ApiError
     */
    public static userControllerGetUserCoinsCount(): CancelablePromise<UserCoinsCount | ErrorObject> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/coins_count',
        });
    }

    /**
     * (ROLE_ADMIN) update user roles
     * modify the user roles
     * @param userId
     * @param requestBody
     * @returns UserOutput
     * @returns ErrorObject
     * @throws ApiError
     */
    public static userControllerEditRoles(
        userId: string,
        requestBody: UserRolesInput,
    ): CancelablePromise<UserOutput | ErrorObject> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/user/{user_id}/roles',
            path: {
                'user_id': userId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
