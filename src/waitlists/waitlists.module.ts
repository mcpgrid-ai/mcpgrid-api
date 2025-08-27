import { Module } from '@nestjs/common';

import { CreateWaitlistController } from './controllers/createWaitlist';

@Module({
  controllers: [CreateWaitlistController],
})
export class WaitlistsModule {}
