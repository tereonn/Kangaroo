import { Module } from '@nestjs/common';
import { UserModelService } from './user.service';
import { PrismaService } from './prisma.service';

@Module({
  providers: [UserModelService, PrismaService],
  exports: [UserModelService],
})
export class ModelModule {}
