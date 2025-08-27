/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable, Logger } from '@nestjs/common';
import { get } from 'lodash';

import { GqlClientService } from '../gql-client';
import {
  WaitlistsCreate,
  WaitlistsCreateMutation,
  WaitlistsCreateMutationVariables,
} from '../../__generated__/query';

@Injectable()
export class WaitlistsService {
  private readonly logger = new Logger(WaitlistsService.name, {
    timestamp: true,
  });

  public constructor(private client: GqlClientService) {}

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

      const log = get(data, ['createLog']);

      return { data: log };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
