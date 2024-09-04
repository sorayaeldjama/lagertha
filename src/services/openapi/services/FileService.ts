/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ErrorObject } from '../models/ErrorObject';
import type { FileMetaOutput } from '../models/FileMetaOutput';
import type { ListDto_for_FileDownloadOutput } from '../models/ListDto_for_FileDownloadOutput';
import type { ListDto_for_FileMetaOutput } from '../models/ListDto_for_FileMetaOutput';
import type { ListDto_for_LinkOutput } from '../models/ListDto_for_LinkOutput';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FileService {

    /**
     * (ROLE_ADMIN) create user group
     * create a user group
     * @param fileName
     * @param keyUuid
     * @param requestBody
     * @returns FileMetaOutput
     * @returns ErrorObject
     * @throws ApiError
     */
    public static fileControllerUploadFile(
        fileName: string,
        keyUuid: string,
        requestBody: Array<number>,
    ): CancelablePromise<FileMetaOutput | ErrorObject> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/file/{file_name}/{key_uuid}',
            path: {
                'file_name': fileName,
                'key_uuid': keyUuid,
            },
            body: requestBody,
            mediaType: 'application/octet-stream',
        });
    }

    /**
     * (ROLE_USER, ROLE_LINK) get file
     * download file
     * @param fileId
     * @returns number
     * @returns ErrorObject
     * @throws ApiError
     */
    public static fileControllerGetFile(
        fileId: string,
    ): CancelablePromise<Array<number> | ErrorObject> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/file/{file_id}',
            path: {
                'file_id': fileId,
            },
        });
    }

    /**
     * (ROLE_USER) get file_meta
     * ge file_meta
     * @param fileId
     * @returns FileMetaOutput
     * @returns ErrorObject
     * @throws ApiError
     */
    public static fileControllerDeleteFileMeta(
        fileId: string,
    ): CancelablePromise<FileMetaOutput | ErrorObject> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/file/{file_id}',
            path: {
                'file_id': fileId,
            },
        });
    }

    /**
     * (ROLE_USER, ROLE_LINK) get file_meta
     * ge file_meta
     * @param fileId
     * @returns FileMetaOutput
     * @returns ErrorObject
     * @throws ApiError
     */
    public static fileControllerGetFileMeta(
        fileId: string,
    ): CancelablePromise<FileMetaOutput | ErrorObject> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/file/{file_id}/meta',
            path: {
                'file_id': fileId,
            },
        });
    }

    /**
     * (ROLE_USER) get file_meta list
     * get user file_meta list
     * @param page
     * @param limit
     * @returns ListDto_for_FileMetaOutput
     * @returns string
     * @throws ApiError
     */
    public static fileControllerGetFileList(
        page?: number | null,
        limit?: number | null,
    ): CancelablePromise<ListDto_for_FileMetaOutput | string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/file',
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }

    /**
     * (ROLE_USER) get file downloads
     * download the list of a file's download
     * @param fileId
     * @param page
     * @param limit
     * @returns ListDto_for_FileDownloadOutput
     * @returns ErrorObject
     * @throws ApiError
     */
    public static fileControllerGetFileDownloads(
        fileId: string,
        page?: number | null,
        limit?: number | null,
    ): CancelablePromise<ListDto_for_FileDownloadOutput | ErrorObject> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/file/{file_id}/download',
            path: {
                'file_id': fileId,
            },
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }

    /**
     * (ROLE_USER) get file links
     * get the list of file's links
     * @param fileId
     * @param page
     * @param limit
     * @returns ListDto_for_LinkOutput
     * @returns ErrorObject
     * @throws ApiError
     */
    public static fileControllerGetFileLinks(
        fileId: string,
        page?: number | null,
        limit?: number | null,
    ): CancelablePromise<ListDto_for_LinkOutput | ErrorObject> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/file/{file_id}/link',
            path: {
                'file_id': fileId,
            },
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }

}
