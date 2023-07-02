import { Module } from '@nestjs/common';
import { UserModelService } from './user.service';
import { PrismaService } from './prisma.service';
import { SeasonDataModelService } from './season-data.service';

@Module({
  providers: [UserModelService, PrismaService, SeasonDataModelService],
  exports: [UserModelService, SeasonDataModelService],
})
export class ModelModule {}
