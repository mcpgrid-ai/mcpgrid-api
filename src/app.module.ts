import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MeilisearchModule } from '@services/meilisearch';
import { CloudinaryModule } from '@services/cloudinary';

import { ServersModule } from './servers';
import { HealthModule } from './health';

@Module({
  imports: [
    ConfigModule.forRoot(),
    // Services
    CloudinaryModule.forRoot({
      apiKey: process.env.CLOUDINARY_API_KEY,
      apiSecret: process.env.CLOUDINARY_API_SECRET,
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    }),
    MeilisearchModule.forRoot({
      apiKey: process.env.MEILISEARCH_API_KEY,
      host: process.env.MEILISEARCH_HOST,
    }),
    // Features
    HealthModule,
    ServersModule,
  ],
})
export class AppModule {}
