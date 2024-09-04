/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ErrorObject } from '../models/ErrorObject';
import type { ProductInput } from '../models/ProductInput';
import type { ProductOutput } from '../models/ProductOutput';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ProductService {

    /**
     * (ROLE_USER, ROLE_FINANCE) Get the product's list
     * get the whole product list
     * @returns ProductOutput
     * @returns ErrorObject
     * @throws ApiError
     */
    public static productControllerGetProducts(): CancelablePromise<Array<ProductOutput> | ErrorObject> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/product',
        });
    }

    /**
     * (ROLE_FINANCE) create a new product
     * crreate a new product
     * @param requestBody
     * @returns ProductOutput
     * @returns ErrorObject
     * @throws ApiError
     */
    public static productControllerNewProduct(
        requestBody: ProductInput,
    ): CancelablePromise<ProductOutput | ErrorObject> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/product',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * ( ROLE_FINANCE) DELETE product
     * Delete a product
     * @param productId
     * @returns ErrorObject
     * @throws ApiError
     */
    public static productControllerDeleteProduct(
        productId: string,
    ): CancelablePromise<ErrorObject> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/product/{product_id}',
            path: {
                'product_id': productId,
            },
        });
    }

}
