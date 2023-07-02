import {
  CreateSeasonDTO,
  CreateStageDTO,
  DeleteSeasonDTO,
  DeleteStageDTO,
  SeasonDTO,
  StageDTO,
  UpdateSeasonDTO,
  UpdateStageDTO,
} from '@kangaroo/types';
import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { SeasonDataService } from './season-data.service';
import { DOC_DESCR } from '../swagger';

@ApiTags('Season')
@Controller('season-data')
export class SeasonDataController {
  constructor(private readonly seasonDataService: SeasonDataService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Created season',
    type: SeasonDTO,
  })
  @ApiOperation({
    summary: DOC_DESCR.seasonData.post.summary,
    description: DOC_DESCR.seasonData.post.desc,
  })
  async createSeason(@Body() body: CreateSeasonDTO): Promise<SeasonDTO> {
    return { ...(await this.seasonDataService.createSeason(body)), stages: [] };
  }

  @Get()
  @ApiOkResponse({
    description: 'List of created seasons',
    type: SeasonDTO,
  })
  @ApiOperation({
    summary: DOC_DESCR.seasonData.get.summary,
    description: DOC_DESCR.seasonData.get.desc,
  })
  async getSeasons(): Promise<SeasonDTO[]> {
    return this.seasonDataService.getSeasons();
  }

  @Delete()
  @ApiOkResponse({
    description: `Removed season`,
    type: SeasonDTO,
  })
  @ApiOperation({
    summary: DOC_DESCR.seasonData.delete.summary,
    description: DOC_DESCR.seasonData.delete.desc,
  })
  async deleteSeason(@Query() query: DeleteSeasonDTO): Promise<SeasonDTO> {
    return this.seasonDataService.deleteSeason(query);
  }

  @Put()
  @ApiOkResponse({
    description: `Updated season`,
    type: SeasonDTO,
  })
  @ApiOperation({
    summary: DOC_DESCR.seasonData.put.summary,
    description: DOC_DESCR.seasonData.put.desc,
  })
  @ApiConflictResponse({
    description: 'Invalid season data',
  })
  async updateSeason(@Body() body: UpdateSeasonDTO): Promise<SeasonDTO> {
    return this.seasonDataService.updateSeason(body);
  }

  @Post('stage')
  @ApiCreatedResponse({
    description: `Created stage`,
    type: StageDTO,
  })
  @ApiOperation({
    summary: DOC_DESCR.seasonData.stage.post.summary,
    description: DOC_DESCR.seasonData.stage.post.desc,
  })
  async createStage(@Body() body: CreateStageDTO): Promise<StageDTO> {
    return this.seasonDataService.createStage(body);
  }

  @Delete('stage')
  @ApiOkResponse({
    description: `Deleted stage`,
    type: StageDTO,
  })
  async deleteStage(@Query() query: DeleteStageDTO): Promise<StageDTO> {
    return this.seasonDataService.deleteStage(query);
  }

  @Put('stage')
  @ApiOkResponse({
    description: `Updated stage`,
    type: StageDTO,
  })
  async updateStage(@Body() body: UpdateStageDTO): Promise<StageDTO> {
    return this.seasonDataService.updateStage(body);
  }
}
