import { Controller, Get, Logger, Query } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { MeilisearchService } from '@services/meilisearch';
import { CloudinaryService } from '@services/cloudinary';

import {
  GetServersRequest,
  GetServersResponse,
  ServerItem,
} from './getServers.dto';
import { ServerRecord, GetFilterParams } from './getServers.types';
import { SERVER_FIELDS } from './getServers.const';

@ApiTags('Servers')
@Controller('servers')
export class GetServersController {
  private logger = new Logger(GetServersController.name, {
    timestamp: true,
  });

  public constructor(
    private meilisearch: MeilisearchService,
    private cloudinary: CloudinaryService,
  ) {}

  private getFilter({ category }: GetFilterParams): { filter: string[] } {
    const filter = [
      category ? `category.slug = "${category}"` : undefined,
    ].filter((v) => v !== undefined);

    return { filter };
  }

  public getServerLogo(item: ServerRecord) {
    if (item.icon?._meta) {
      return this.cloudinary.url({ publicId: item.icon._meta.public_id });
    }
    return null;
  }

  public getServerIcon(item: ServerRecord) {
    if (item.category.icon?._meta) {
      return this.cloudinary.url({
        publicId: item.category.icon?._meta.public_id,
      });
    }
    return null;
  }

  private transform({ items }: { items: ServerRecord[] }): ServerItem[] {
    return items.map(
      (item): ServerItem => ({
        id: item.id,
        title: item.title,
        logo: this.getServerLogo(item),
        icon: this.getServerIcon(item),
        slug: item.slug,
        owner: item.githubOwner,
        description: item.description,
        isOfficial: item.isOfficial,
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
    @Query() { take, q, skip, category }: GetServersRequest,
  ): Promise<GetServersResponse> {
    try {
      const { filter } = this.getFilter({ category });

      if (q) {
        const { hits, estimatedTotalHits } = await this.meilisearch
          .index<ServerRecord>('server')
          .search(q, {
            filter,
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
          filter,
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
