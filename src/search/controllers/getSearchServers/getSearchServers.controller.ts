import { Controller, Get, Logger, Query } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { MeilisearchService } from '@services/meilisearch';
import { get } from 'lodash';

import {
  GetSearchServersRequest,
  GetSearchServersResponse,
  ServerItem,
} from './getSearchServers.dto';
import { ServerRecord } from './getSearchServers.types';

@ApiTags('Search')
@Controller('search')
export class GetSearchServersController {
  private logger = new Logger(GetSearchServersController.name, {
    timestamp: true,
  });

  public constructor(private meilisearch: MeilisearchService) {}

  @Get('servers')
  @ApiOperation({
    operationId: 'getSearchServers',
  })
  @ApiOkResponse({
    type: GetSearchServersResponse,
  })
  public async getSearchServers(
    @Query() { take, q, skip }: GetSearchServersRequest,
  ): Promise<GetSearchServersResponse> {
    try {
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
          id: get(item, ['documentId']),
          title: get(item, ['Title']),
          logo: get(item, ['Logo', 'url'], null),
          icon: get(item, ['Category', 'Icon']),
        }),
      );

      return {
        data,
        total: estimatedTotalHits,
      };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
