import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ModelModule } from '@kangaroo/model';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [
    ModelModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        secret: config.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: '3h',
        },
      }),
      inject: [ConfigService],
    }),
  ],
})
export class AuthModule {}
