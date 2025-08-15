import { DynamicModule, Module } from '@nestjs/common';

import { ConfigService, ConfigServiceParams } from './services/config';
import { CloudinaryService } from './services/cloudinary';

@Module({
  providers: [CloudinaryService],
  exports: [CloudinaryService],
})
export class CloudinaryModule {
  public static forRoot(config: ConfigServiceParams): DynamicModule {
    return {
      module: CloudinaryModule,
      global: true,
      providers: [
        {
          provide: ConfigService,
          useValue: new ConfigService(config),
        },
      ],
    };
  }
}
