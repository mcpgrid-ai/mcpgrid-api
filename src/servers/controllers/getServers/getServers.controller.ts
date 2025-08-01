import { Controller, Get, Logger, Query } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { MeilisearchService } from '@services/meilisearch';
import { get } from 'lodash';

import {
  GetServersRequest,
  GetServersResponse,
  ServerItem,
} from './getServers.dto';
import { ServerRecord } from './getServers.types';
import { SERVER_FIELDS } from './getServers.const';

@ApiTags('Servers')
@Controller('servers')
export class GetServersController {
  private logger = new Logger(GetServersController.name, {
    timestamp: true,
  });

  public constructor(private meilisearch: MeilisearchService) {}

  private transform({ items }: { items: ServerRecord[] }): ServerItem[] {
    return items.map(
      (item): ServerItem => ({
        id: item.documentId,
        title: item.Title,
        logo: get(item, ['Logo', 'url'], null),
        icon: item.Category.Icon,
        slug: item.Slug,
        owner: item.GitHubOwner,
        description: item.Description,
        isOfficial: item.IsOfficial,
      }),
    );
  }

  @Get()
  @ApiOperation({
    operationId: 'getServers',
  })
  @ApiOkResponse({
    type: GetServersResponse,
  })
  public async getSearchServers(
    @Query() { take, q, skip }: GetServersRequest,
  ): Promise<GetServersResponse> {
    try {
      if (q) {
        const { hits, estimatedTotalHits } = await this.meilisearch
          .index<ServerRecord>('server')
          .search(q, {
            limit: take,
            offset: skip,
            attributesToRetrieve: SERVER_FIELDS,
          });

        const data = this.transform({
          items: hits,
        });

        return {
          data,
          total: estimatedTotalHits,
        };
      }

      const { results, total } = await this.meilisearch
        .index<ServerRecord>('server')
        .getDocuments({
          limit: take,
          offset: skip,
          fields: SERVER_FIELDS,
        });

      const data = this.transform({
        items: results,
      });

      return {
        data,
        total,
      };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
