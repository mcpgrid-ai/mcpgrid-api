import { Controller, Logger, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DeployerMessagesService } from '@services/deployer';

@ApiTags('Instances')
@Controller('instances')
export class CreateInstanceController {
  private readonly logger = new Logger(CreateInstanceController.name, {
    timestamp: true,
  });

  public constructor(private messages: DeployerMessagesService) {}

  @Post()
  public createInstance() {
    this.messages.test('test');
    this.logger.log('Creating instance');
    return {};
  }
}
