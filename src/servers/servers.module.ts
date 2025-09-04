import { Module } from '@nestjs/common';

import { GetServersController } from './controllers/getServers';
import { GetServerController } from './controllers/getServer';
import { InitService } from './services/init';

@Module({
  providers: [InitService],
  controllers: [GetServersController, GetServerController],
})
export class ServersModule {}
