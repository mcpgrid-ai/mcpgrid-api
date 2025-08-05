import { Module } from '@nestjs/common';

import { GetServersController } from './controllers/getServers';
import { ServersService } from './services/servers';

@Module({
  providers: [ServersService],
  controllers: [GetServersController],
})
export class ServersModule {}
