import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

import { HttpClientServiceConfig } from './http-client.types';

@Injectable()
export class HttpClientService {
  public instance: AxiosInstance;

  public constructor({ schemaUrl }: HttpClientServiceConfig) {
    this.instance = axios.create({
      baseURL: schemaUrl,
    });
  }
}
