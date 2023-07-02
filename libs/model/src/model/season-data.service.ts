import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class SeasonDataModelService {
  constructor(private readonly prisma: PrismaService) {}

  async createSeason(data: Prisma.SeasonCreateInput) {
    return this.prisma.season.create({ data });
  }

  async updateSeason(id: number, data: Prisma.SeasonUpdateInput) {
    await this.checkIsSeasonExistOrThrowError(id);

    return this.prisma.season.update({
      where: {
        id,
      },
      data,
      include: {
        stages: {
          select: {
            id: true,
            date: true,
            location: true,
          },
        },
      },
    });
  }

  async getSeasons() {
    return this.prisma.season.findMany({
      include: {
        stages: {
          select: {
            id: true,
            date: true,
            location: true,
          },
        },
      },
    });
  }

  async deleteSeason(id: number) {
    return this.prisma.season.delete({
      where: {
        id,
      },
      include: {
        stages: {
          select: {
            id: true,
            date: true,
            location: true,
          },
        },
      },
    });
  }

  async createStage(
    seasonId: number,
    data: Omit<Prisma.StageCreateInput, 'season'>
  ) {
    await this.checkIsSeasonExistOrThrowError(seasonId);

    return this.prisma.stage.create({
      data: {
        ...data,
        season: {
          connect: {
            id: seasonId,
          },
        },
      },
    });
  }

  async deleteStage(id: number) {
    return this.prisma.stage.delete({
      where: {
        id,
      },
    });
  }

  async updateStage(id: number, data: Prisma.StageUpdateInput) {
    return this.prisma.stage.update({
      where: {
        id,
      },
      data,
    });
  }

  private async checkIsSeasonExistOrThrowError(
    seasonId: number
  ): Promise<void> {
    const isSeasonExists =
      (await this.prisma.season.count({
        where: {
          id: seasonId,
        },
      })) > 0;

    if (!isSeasonExists) {
      throw new ConflictException();
    }
  }
}
