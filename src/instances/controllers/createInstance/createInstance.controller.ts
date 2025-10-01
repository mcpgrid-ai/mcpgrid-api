import { Controller, Logger, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Instances')
@Controller('instances')
export class CreateInstanceController {
  private readonly logger = new Logger(CreateInstanceController.name, {
    timestamp: true,
  });

  public constructor() {}

  @Post()
  public createInstance() {
    this.logger.log('Creating instance');
    return {};
  }
}
