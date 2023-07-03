/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthResponseDto } from '../models/AuthResponseDto';
import type { RegisterRequestDto } from '../models/RegisterRequestDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuthService {

    /**
     * Registers a new user account with the provided information.
     * If the registration attempt fails due to invalid or incomplete data, the API will respond with a 401 Unauthorized status code.
     * Clients should handle this response by requesting valid registration data from the user or directing them to the appropriate registration page.
     * @param requestBody
     * @returns AuthResponseDto Successful registration
     * @throws ApiError
     */
    public static authControllerRegister(
        requestBody: RegisterRequestDto,
    ): CancelablePromise<AuthResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                409: `Invalid registration data`,
            },
        });
    }

    /**
     * Authenticates a user with the provided credentials.
     * If the login attempt fails due to invalid or missing credentials, the API will respond with a 401 Unauthorized status code.
     * Clients should handle this response by requesting valid credentials from the user or directing them to the appropriate login page.
     * @param email
     * @param pass
     * @returns AuthResponseDto Successful login
     * @throws ApiError
     */
    public static authControllerSingIn(
        email: string,
        pass: string,
    ): CancelablePromise<AuthResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/auth',
            query: {
                'email': email,
                'pass': pass,
            },
            errors: {
                401: `Invalid credentials`,
            },
        });
    }

}
