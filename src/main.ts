import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { RequestMethod, ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api', {
    exclude: [
      {
        path: '/health',
        method: RequestMethod.GET,
      },
    ],
  });

  app.enableCors({
    origin: (process.env.CORS_ORIGIN_WHITELIST || '')
      .split(',')
      .map((v) => v.trim()),
  });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Mcpbox API')
    .addBearerAuth()
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/', app, documentFactory, {
    jsonDocumentUrl: 'docs/swagger.json',
    yamlDocumentUrl: 'docs/swagger.yaml',
  });

  await app.listen(process.env.PORT ?? 8080, '0.0.0.0');
}

// eslint-disable-next-line no-console
bootstrap().then(console.log).catch(console.error);
