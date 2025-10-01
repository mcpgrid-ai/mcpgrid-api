import { Module } from '@nestjs/common';

import { CreateInstanceController } from './controllers/createInstance';

@Module({
  providers: [],
  controllers: [CreateInstanceController],
})
export class InstancesModule {}
