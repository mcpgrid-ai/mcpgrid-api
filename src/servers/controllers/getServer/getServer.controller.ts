import {
  Controller,
  Get,
  Logger,
  NotFoundException,
  Param,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { KeystoneClientService } from '@services/keystone';

import { GetServerResponse } from './getServer.dto';

@ApiTags('Servers')
@Controller('servers')
export class GetServerController {
  private logger = new Logger(GetServerController.name, {
    timestamp: true,
  });

  public constructor(private keystone: KeystoneClientService) {}

  @Get(':id')
  @ApiOperation({
    operationId: 'getServer',
  })
  @ApiOkResponse({
    type: GetServerResponse,
  })
  public async getServer(@Param('id') id: string): Promise<GetServerResponse> {
    try {
      const { server } = await this.keystone.servers.findUnique({
        id,
      });

      if (!server) throw new NotFoundException();

      const { icon, category, ...rest } = server;

      return {
        icon: category?.icon?.publicUrlTransformed,
        logo: icon?.publicUrlTransformed,
        ...rest,
      };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
