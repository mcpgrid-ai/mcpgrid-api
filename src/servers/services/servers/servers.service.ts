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
      await this.meilisearch
        .index('server')
        .updateFilterableAttributes(['Category.Slug']);
      const settings = await this.meilisearch
        .index('servers')
        .getFilterableAttributes();
      this.logger.log('Meilisearch filterable attributes', settings);
    } catch (error) {
      this.logger.error(error);
    }
  }
}
