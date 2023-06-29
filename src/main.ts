import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );
  app.enableCors({           
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,})
  app.setBaseViewsDir('./views');
  app.setViewEngine('pug');
  await app.listen(5000)

  console.log('server running at: http//localhost/5000');
}
bootstrap();
