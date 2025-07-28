import { Module } from '@nestjs/common';

import { GetServersController } from './controllers/getServers';

@Module({
  controllers: [GetServersController],
})
export class ServersModule {}
