import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger, RequestMethod, ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

const logger = new Logger(bootstrap.name, {
  timestamp: true,
});

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

bootstrap()
  .then(() => {
    logger.log('Ready');
  })
  .catch((error) => {
    logger.error(error);
  });
