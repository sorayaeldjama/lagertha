/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FileMetaOutput } from './FileMetaOutput';

export type LinkOutput = {
    id: string;
    uuid?: string | null;
    files?: Array<FileMetaOutput> | null;
    temp_p?: string | null;
    name: string;
    is_init: boolean;
    expired_at?: string | null;
    created_at: string;
};
