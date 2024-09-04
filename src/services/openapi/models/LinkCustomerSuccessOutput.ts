/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FileMetaOutput } from './FileMetaOutput';

export type LinkCustomerSuccessOutput = {
    id: string;
    uuid?: string | null;
    files?: Array<FileMetaOutput> | null;
    expired_at?: string | null;
    created_at: string;
    email_sent: number;
    link_openning: number;
};

