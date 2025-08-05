import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { MeilisearchService } from '@services/meilisearch';

@Injectable()
export class ServersService implements OnModuleInit {
  private logger = new Logger(ServersService.name, {
    timestamp: true,
  });

  public constructor(private meilisearch: MeilisearchService) {}

  public async onModuleInit() {
    try {
      const updateFilterableAttributes = this.meilisearch
        .index('server')
        .updateFilterableAttributes(['Category.Slug']);

      const updateSearchableAttributes = await this.meilisearch
        .index('server')
        .updateSearchableAttributes(['Title', 'Description']);

      await Promise.all([
        updateFilterableAttributes,
        updateSearchableAttributes,
      ]);

      const getFilterableAttributes = this.meilisearch
        .index('server')
        .getFilterableAttributes();

      const getSearchableAttributes = this.meilisearch
        .index('server')
        .getSearchableAttributes();

      const [filterableAttributes, searchableAttributes] = await Promise.all([
        getFilterableAttributes,
        getSearchableAttributes,
      ]);

      this.logger.log(
        'Meilisearch filterable attributes',
        filterableAttributes,
      );

      this.logger.log(
        'Meilisearch searchable attributes',
        searchableAttributes,
      );
    } catch (error) {
      this.logger.error(error);
    }
  }
}
