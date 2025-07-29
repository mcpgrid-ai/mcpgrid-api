import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MeilisearchModule } from '@services/meilisearch';

import { ServersModule } from './servers';
import { HealthModule } from './health';

@Module({
  imports: [
    ConfigModule.forRoot(),
    // Services
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
