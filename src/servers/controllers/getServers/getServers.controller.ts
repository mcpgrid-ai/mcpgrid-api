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

@ApiTags('Servers')
@Controller('servers')
export class GetServersController {
  private logger = new Logger(GetServersController.name, {
    timestamp: true,
  });

  public constructor(private meilisearch: MeilisearchService) {}

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
            attributesToRetrieve: [
              'Category.Icon',
              'Title',
              'documentId',
              'Logo.url',
            ],
          });

        const data = hits.map(
          (item): ServerItem => ({
            id: item.documentId,
            title: item.Title,
            logo: get(item, ['Logo', 'url'], null),
            icon: item.Category.Icon,
            slug: item.Slug,
          }),
        );

        return {
          data,
          total: estimatedTotalHits,
        };
      }

      return {
        data: [],
        total: 0,
      };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
