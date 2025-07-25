import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MeilisearchModule } from '@services/meilisearch';

import { SearchModule } from './search';

@Module({
  imports: [
    ConfigModule.forRoot(),
    // Services
    MeilisearchModule.forRoot({
      apiKey: 'your_strong_master_key',
      host: 'http://localhost:7700',
    }),
    // Features
    SearchModule,
  ],
})
export class AppModule {}
