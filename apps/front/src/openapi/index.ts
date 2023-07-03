/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export { ApiError } from './core/ApiError';
export { CancelablePromise, CancelError } from './core/CancelablePromise';
export { OpenAPI } from './core/OpenAPI';
export type { OpenAPIConfig } from './core/OpenAPI';

export type { AuthResponseDto } from './models/AuthResponseDto';
export type { CreateSeasonDTO } from './models/CreateSeasonDTO';
export type { CreateStageDTO } from './models/CreateStageDTO';
export type { RegisterRequestDto } from './models/RegisterRequestDto';
export type { SeasonDTO } from './models/SeasonDTO';
export type { StageDTO } from './models/StageDTO';
export type { UpdateSeasonDTO } from './models/UpdateSeasonDTO';
export type { UpdateStageDTO } from './models/UpdateStageDTO';

export { AuthService } from './services/AuthService';
export { SeasonService } from './services/SeasonService';
