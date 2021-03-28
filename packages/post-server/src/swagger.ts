import { INestApplication } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { APP_NAME, SWAGGER_ROUTE } from './constant/app-stirng';

export function setupSwagger(app: INestApplication) {
  const version = JSON.parse(
    readFileSync(join(process.cwd(), 'package.json'), 'utf-8'),
  ).version;
  const options = new DocumentBuilder()
    .setTitle(APP_NAME)
    .setDescription('Administration User Interface for Building Blocks')
    .setVersion(version)
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(SWAGGER_ROUTE, app, document);
}
