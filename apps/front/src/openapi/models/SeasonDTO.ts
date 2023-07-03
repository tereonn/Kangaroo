/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { StageDTO } from './StageDTO';

export type SeasonDTO = {
    id: number;
    name: string;
    description: string;
    stages: Array<StageDTO>;
};

