import { Module } from '@nestjs/common';

import { GetServersController } from './controllers/getServers';
import { GetServerController } from './controllers/getServer';

@Module({
  providers: [],
  controllers: [GetServersController, GetServerController],
})
export class ServersModule {}
