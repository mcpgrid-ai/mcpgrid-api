import { Injectable, OnModuleInit } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';

import { ConfigServiceParams } from './config.types';

@Injectable()
export class ConfigService implements OnModuleInit {
  public constructor(private config: ConfigServiceParams) {}

  public onModuleInit() {
    cloudinary.config({
      secure: true,
      api_key: this.config.apiKey,
      api_secret: this.config.apiSecret,
      cloud_name: this.config.cloudName,
    });
  }
}
