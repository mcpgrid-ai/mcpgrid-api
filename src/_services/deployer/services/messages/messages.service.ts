import { Injectable, Logger } from '@nestjs/common';

import { PubSubClientService } from '../pub-sub-client';

@Injectable()
export class DeployerMessagesService {
  private readonly logger = new Logger(DeployerMessagesService.name, {
    timestamp: true,
  });

  public constructor(private client: PubSubClientService) {}

  public test(message: string) {
    this.client.send('test', { message });
  }
}
