import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MeilisearchModule } from '@services/meilisearch';
import { CloudinaryModule } from '@services/cloudinary';
import { KeystoneModule } from '@services/keystone';

import { ServersModule } from './servers';
import { HealthModule } from './health';
import { WaitlistsModule } from './waitlists';

@Module({
  imports: [
    ConfigModule.forRoot(),
    // Services
    KeystoneModule.forRoot({
      schemaUrl: process.env.KEYSTONE_GRAPHQL_SCHEMA_URL,
    }),
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
    WaitlistsModule,
  ],
})
export class AppModule {}
