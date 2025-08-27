/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable, Logger } from '@nestjs/common';
import { get } from 'lodash';

import { GqlClientService } from '../gql-client';
import {
  WaitlistsCreate,
  WaitlistsCreateMutation,
  WaitlistsCreateMutationVariables,
  WaitlistsFindUnique,
  WaitlistsFindUniqueQuery,
  WaitlistsFindUniqueQueryVariables,
} from '../../__generated__/query';

@Injectable()
export class WaitlistsService {
  private readonly logger = new Logger(WaitlistsService.name, {
    timestamp: true,
  });

  public constructor(private client: GqlClientService) {}

  public async findUnique(variables: WaitlistsFindUniqueQueryVariables) {
    try {
      const { data } = await this.client.query<
        WaitlistsFindUniqueQuery,
        WaitlistsFindUniqueQueryVariables
      >({
        variables,
        query: WaitlistsFindUnique,
      });

      if (!data) throw new Error('No data');

      return { data: get(data, ['waitlist']) };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  public async create(variables: WaitlistsCreateMutationVariables) {
    try {
      const { data } = await this.client.mutate<
        WaitlistsCreateMutation,
        WaitlistsCreateMutationVariables
      >({
        variables,
        mutation: WaitlistsCreate,
      });

      if (!data) throw new Error('No data');

      return { data: get(data, ['createWaitlist']) };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
