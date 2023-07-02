import { SeasonDataModelService } from '@kangaroo/model';
import {
  CreateSeasonDTO,
  CreateStageDTO,
  DeleteSeasonDTO,
  DeleteStageDTO,
  UpdateSeasonDTO,
  UpdateStageDTO,
} from '@kangaroo/types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SeasonDataService {
  constructor(
    private readonly seasonDataModelService: SeasonDataModelService
  ) {}

  async createSeason(data: CreateSeasonDTO) {
    return this.seasonDataModelService.createSeason(data);
  }

  async getSeasons() {
    return this.seasonDataModelService.getSeasons();
  }

  async deleteSeason(data: DeleteSeasonDTO) {
    //
    // TODO: add logic delete only if stage wasn't started in target season.
    //
    return this.seasonDataModelService.deleteSeason(data.id);
  }

  async updateSeason(data: UpdateSeasonDTO) {
    const seasonId = data.id;
    delete data.id;

    return this.seasonDataModelService.updateSeason(seasonId, data);
  }

  async createStage(data: CreateStageDTO) {
    const seasonId = data.seasonId;
    delete data.seasonId;

    return this.seasonDataModelService.createStage(seasonId, data);
  }

  async deleteStage(data: DeleteStageDTO) {
    //
    // TODO: add logic delete only if stage wasn't started
    //
    return this.seasonDataModelService.deleteStage(data.id);
  }

  async updateStage(data: UpdateStageDTO) {
    const stageId = data.id;
    delete data.id;

    return this.seasonDataModelService.updateStage(stageId, data);
  }
}
