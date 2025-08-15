import { Injectable, OnModuleInit } from '@nestjs/common';
import { MeilisearchService } from '@services/meilisearch';

@Injectable()
export class InitService implements OnModuleInit {
  public constructor(private meilisearch: MeilisearchService) {}

  public async onModuleInit() {
    const updateSearchableAttributesRequest = this.meilisearch
      .index('server')
      .updateSearchableAttributes(['title', 'description']);

    const updateFilterableAttributesRequest = this.meilisearch
      .index('server')
      .updateFilterableAttributes(['category.slug']);

    await Promise.all([
      updateSearchableAttributesRequest,
      updateFilterableAttributesRequest,
    ]);
  }
}
