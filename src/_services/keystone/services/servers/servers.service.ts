import { Injectable, Logger } from '@nestjs/common';

import { GqlClientService } from '../gql-client';
import {
  ServersFindMany,
  ServersFindManyQuery,
  ServersFindManyQueryVariables,
  ServersFindUnique,
  ServersFindUniqueQuery,
  ServersFindUniqueQueryVariables,
} from '../../__generated__/query';

@Injectable()
export class ServersService {
  private readonly logger = new Logger(ServersService.name, {
    timestamp: true,
  });

  public constructor(private client: GqlClientService) {}

  public async findMany(variables: ServersFindManyQueryVariables) {
    try {
      const { data } = await this.client.query<
        ServersFindManyQuery,
        ServersFindManyQueryVariables
      >({
        variables,
        query: ServersFindMany,
      });

      if (!data) throw new Error('No data');

      return { ...data };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  public async findUnique(variables: ServersFindUniqueQueryVariables) {
    try {
      const { data, error } = await this.client.query<
        ServersFindUniqueQuery,
        ServersFindUniqueQueryVariables
      >({
        variables,
        query: ServersFindUnique,
      });

      if (!data) throw new Error('No data');

      if (error) throw error;

      return { ...data };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
