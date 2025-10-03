import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@services/auth';

@ApiTags('Instances')
@Controller('instances')
export class GetInstancesController {
  @Get()
  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Get all instances',
    operationId: 'getInstances',
  })
  public getInstances() {
    return {};
  }
}
