/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ErrorObject } from '../models/ErrorObject';
import type { PaymentInput } from '../models/PaymentInput';
import type { PaymentOutput } from '../models/PaymentOutput';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PaymentService {

    /**
     * (ROLE_DEVICE, ROLE_USER) create link
     * create a link
     * @param requestBody
     * @returns PaymentOutput
     * @returns ErrorObject
     * @throws ApiError
     */
    public static paymentControllerPostPayment(
        requestBody: PaymentInput,
    ): CancelablePromise<PaymentOutput | ErrorObject> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/payment',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * (WEBHOOK)
     * fullfill order
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static paymentControllerWebhookPayment(
        requestBody: Array<number>,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/payment/webhook',
            body: requestBody,
            mediaType: 'application/octet-stream',
        });
    }

}
