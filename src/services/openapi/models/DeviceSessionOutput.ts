/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserOutput } from './UserOutput';

export type DeviceSessionOutput = {
    id: string;
    user_id: string;
    fingerprint: string;
    ip: string;
    user?: UserOutput | null;
    user_agent: string;
    created_at: string;
};

