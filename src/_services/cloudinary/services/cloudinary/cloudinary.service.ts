import { Injectable } from '@nestjs/common';
import { v2 } from 'cloudinary';

import { UrlParams } from './cloudinary.types';

@Injectable()
export class CloudinaryService {
  public url({ publicId }: UrlParams) {
    return v2.url(publicId, {
      format: 'webp',
    });
  }
}
