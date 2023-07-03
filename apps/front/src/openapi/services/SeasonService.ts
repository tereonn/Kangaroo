/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateSeasonDTO } from '../models/CreateSeasonDTO';
import type { CreateStageDTO } from '../models/CreateStageDTO';
import type { SeasonDTO } from '../models/SeasonDTO';
import type { StageDTO } from '../models/StageDTO';
import type { UpdateSeasonDTO } from '../models/UpdateSeasonDTO';
import type { UpdateStageDTO } from '../models/UpdateStageDTO';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SeasonService {

    /**
     * Create season.
     * Create new season.
     * @param requestBody
     * @returns SeasonDTO Created season
     * @throws ApiError
     */
    public static seasonDataControllerCreateSeason(
        requestBody: CreateSeasonDTO,
    ): CancelablePromise<SeasonDTO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/season-data',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get list of created seasons.
     * Return the array of created seasond with related stages.
     * @returns SeasonDTO List of created seasons
     * @throws ApiError
     */
    public static seasonDataControllerGetSeasons(): CancelablePromise<Array<SeasonDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/season-data',
        });
    }

    /**
     * Delete season.
     * Delete season if there aren't any starded related stages.
     * @param id
     * @returns SeasonDTO Removed season
     * @throws ApiError
     */
    public static seasonDataControllerDeleteSeason(
        id: number,
    ): CancelablePromise<SeasonDTO> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/season-data',
            query: {
                'id': id,
            },
        });
    }

    /**
     * Update season.
     * Change season if there aren't any started related stages.
     * @param requestBody
     * @returns SeasonDTO Updated season
     * @throws ApiError
     */
    public static seasonDataControllerUpdateSeason(
        requestBody: UpdateSeasonDTO,
    ): CancelablePromise<SeasonDTO> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/season-data',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                409: `Invalid season data`,
            },
        });
    }

    /**
     * @param requestBody
     * @returns StageDTO Created stage
     * @throws ApiError
     */
    public static seasonDataControllerCreateStage(
        requestBody: CreateStageDTO,
    ): CancelablePromise<StageDTO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/season-data/stage',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id
     * @returns StageDTO Deleted stage
     * @throws ApiError
     */
    public static seasonDataControllerDeleteStage(
        id: number,
    ): CancelablePromise<StageDTO> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/season-data/stage',
            query: {
                'id': id,
            },
        });
    }

    /**
     * @param requestBody
     * @returns StageDTO Updated stage
     * @throws ApiError
     */
    public static seasonDataControllerUpdateStage(
        requestBody: UpdateStageDTO,
    ): CancelablePromise<StageDTO> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/season-data/stage',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
