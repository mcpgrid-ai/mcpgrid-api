import {
  Body,
  ConflictException,
  Controller,
  InternalServerErrorException,
  Logger,
  Post,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ApiException } from '@common/dto';
import { KeystoneClientService } from '@services/keystone';

import {
  CreateWaitlistRequest,
  CreateWaitlistResponse,
} from './createWaitlist.dto';

@ApiTags('Waitlists')
@Controller('waitlists')
export class CreateWaitlistController {
  private readonly logger = new Logger(CreateWaitlistController.name, {
    timestamp: true,
  });

  public constructor(private keystone: KeystoneClientService) {}

  @Post()
  @ApiOperation({
    operationId: 'createWaitlist',
  })
  @ApiBadRequestResponse({
    type: ApiException,
  })
  @ApiOkResponse({
    type: CreateWaitlistResponse,
  })
  public async createWaitlist(
    @Body() request: CreateWaitlistRequest,
  ): Promise<CreateWaitlistResponse> {
    try {
      const { data: existing } = await this.keystone.waitlists.findUnique({
        where: {
          email: request.email,
        },
      });

      if (existing?.id) throw new ConflictException();

      const { data } = await this.keystone.waitlists.create({
        data: request,
      });

      if (!data?.id) throw new InternalServerErrorException();

      return { id: data.id };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
