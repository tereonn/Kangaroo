import { Module } from '@nestjs/common';
import { SeasonDataService } from './season-data.service';
import { ModelModule } from '@kangaroo/model';
import { SeasonDataController } from './season-data.controller';

@Module({
  providers: [SeasonDataService],
  imports: [ModelModule],
  controllers: [SeasonDataController],
})
export class SeasonDataModule {}
