import { DynamicModule, Module } from '@nestjs/common';

import { PubSubClientService } from './services/pub-sub-client';
import { DeployerModuleConfig } from './deployer.types';

@Module({
  providers: [],
  exports: [],
})
export class DeployerModule {
  public static forRoot({
    apiEndpoint,
    topic,
    projectId,
  }: DeployerModuleConfig): DynamicModule {
    return {
      global: true,
      module: DeployerModule,
      providers: [
        {
          provide: PubSubClientService,
          useValue: new PubSubClientService({
            client: {
              apiEndpoint,
              projectId,
            },
            topic,
          }),
        },
      ],
    };
  }
}
