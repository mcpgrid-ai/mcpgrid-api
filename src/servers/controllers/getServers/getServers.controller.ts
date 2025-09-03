import { Controller, Get, Logger, Query } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { DTO, KeystoneClientService } from '@services/keystone';
import { castArray } from 'lodash';

import {
  GetServersRequest,
  GetServersResponse,
  ServerItem,
} from './getServers.dto';

@ApiTags('Servers')
@Controller('servers')
export class GetServersController {
  private logger = new Logger(GetServersController.name, {
    timestamp: true,
  });

  public constructor(private keystone: KeystoneClientService) {}

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
      const or: DTO.ServerWhereInput['OR'] = [q].concat(q?.split(' ')).reduce(
        (res, contains): DTO.ServerWhereInput['OR'] => [
          ...(res ? castArray(res) : []),
          {
            title: {
              contains,
              mode: DTO.QueryMode.Insensitive,
            },
          },
          {
            description: {
              contains,
              mode: DTO.QueryMode.Insensitive,
            },
          },
          {
            keywords: {
              contains,
              mode: DTO.QueryMode.Insensitive,
            },
          },
        ],
        [] as DTO.ServerWhereInput['OR'],
      );

      const { servers, serversCount } = await this.keystone.servers.findMany({
        take,
        skip,
        where: {
          category: {
            OR: [
              {
                slug: {
                  equals: category,
                },
                id: {
                  equals: category,
                },
              },
            ],
          },
          OR: or,
        },
      });

      const data: ServerItem[] = (servers || []).map((item) => ({
        id: item.id,
        slug: item.slug || '',
        title: item.title || '',
        description: item.description || '',
        isOfficial: item.isOfficial === null ? false : !!item.isOfficial,
        owner: item.githubOwner || '',
        logo:
          item.icon?.publicUrlTransformed ||
          item.category?.icon?.publicUrlTransformed,
      }));

      return {
        data,
        total: serversCount || 0,
      };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
