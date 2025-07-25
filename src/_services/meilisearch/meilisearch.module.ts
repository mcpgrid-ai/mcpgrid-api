import { DynamicModule, Module } from '@nestjs/common';
import { MeilisearchModuleConfig } from './meilisearch.types';
import { MeilisearchService } from './services/meilisearch';


@Module({})
export class MeilisearchModule {
  public static forRoot({
    apiKey,
    host,
  }: MeilisearchModuleConfig): DynamicModule {
    return {
      module: MeilisearchModule,
      global: true,
      exports: [MeilisearchService],
      providers: [
        {
          provide: MeilisearchService,
          useValue: new MeilisearchService({
            host,
            apiKey,
          }),
        },
      ],
    };
  }
}
