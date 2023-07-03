/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  const validationPipe = new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
  });
  app.useGlobalPipes(validationPipe);

  const swaggerConf = new DocumentBuilder()
    .setTitle('Kangaroo api')
    .setVersion('1.0')
    .addTag(
      'Auth',
      'Represents a collection of API endpoints or operations related to authentication and authorization within an API documentation.'
    )
    .build();

  const doc = SwaggerModule.createDocument(app, swaggerConf);
  SwaggerModule.setup('swagger', app, doc);

  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
