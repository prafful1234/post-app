import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as express from 'express';
import { setupSwagger } from './swagger';
import { GLOBAL_API_PREFIX } from './constant/app-stirng';

async function bootstrap() {
  const server = new ExpressAdapter(express());
  const app = await NestFactory.create(AppModule, server);
  app.enableCors();
  app.setGlobalPrefix(GLOBAL_API_PREFIX);
  setupSwagger(app);
  await app.listen(8800);
}
bootstrap();
