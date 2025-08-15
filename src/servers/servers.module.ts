import { Module } from '@nestjs/common';

import { GetServersController } from './controllers/getServers';
import { InitService } from './services/init';

@Module({
  providers: [InitService],
  controllers: [GetServersController],
})
export class ServersModule {}
