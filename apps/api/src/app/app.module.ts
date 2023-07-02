import { Module } from '@nestjs/common';

import { AuthModule } from '../auth/auth.module';
import { RouterModule } from '@nestjs/core';
import { SeasonDataModule } from '../season-data/season-data.module';

@Module({
  imports: [
    AuthModule,
    RouterModule.register([
      {
        path: 'auth',
        module: AuthModule,
      },
    ]),
    SeasonDataModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
