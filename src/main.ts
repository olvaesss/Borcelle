import { NestFactory } from '@nestjs/core';
import {join} from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setBaseViewsDir(join(__dirname, '../views'));
  app.setViewEngine('pug');
  await app.listen(3000)
  console.log('server running at: http//localhost/3000');
}
bootstrap();
