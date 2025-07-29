import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MeilisearchModule } from '@services/meilisearch';

import { ServersModule } from './servers';

@Module({
  imports: [
    ConfigModule.forRoot(),
    // Services
    MeilisearchModule.forRoot({
      apiKey: process.env.MEILISEARCH_API_KEY,
      host: process.env.MEILISEARCH_HOST,
    }),
    // Features
    ServersModule,
  ],
})
export class AppModule {}
