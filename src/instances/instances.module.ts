import { Module } from '@nestjs/common';
import { AuthModule } from '@services/auth';

import { CreateInstanceController } from './controllers/createInstance';
import { GetInstancesController } from './controllers/getInstances';

@Module({
  imports: [AuthModule],
  providers: [],
  controllers: [CreateInstanceController, GetInstancesController],
})
export class InstancesModule {}
