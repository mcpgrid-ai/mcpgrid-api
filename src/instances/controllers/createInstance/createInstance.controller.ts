import { Controller, Logger, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DeployerMessagesService } from '@services/deployer';
import { AuthGuard } from '@services/auth';

@ApiTags('Instances')
@Controller('instances')
export class CreateInstanceController {
  private readonly logger = new Logger(CreateInstanceController.name, {
    timestamp: true,
  });

  public constructor(private messages: DeployerMessagesService) {}

  @Post()
  @UseGuards(AuthGuard)
  public createInstance() {
    this.messages.test('test');
    this.logger.log('Creating instance');
    return {};
  }
}
