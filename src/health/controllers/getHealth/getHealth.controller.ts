import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Health')
@Controller('health')
export class GetHealthController {
  @Get()
  @ApiOperation({
    operationId: 'getHealth',
  })
  public hetHealth() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      key: process.env.MEILISEARCH_API_KEY,
      host: process.env.MEILISEARCH_HOST,
    };
  }
}
