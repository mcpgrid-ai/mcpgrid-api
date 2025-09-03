import { DynamicModule, Module } from '@nestjs/common';
import { ApolloLink, HttpLink, InMemoryCache } from '@apollo/client';
import { RetryLink } from '@apollo/client/link/retry';

import { GqlClientService } from './services/gql-client';
import { KeystoneClientService } from './services/keystone-client';
import { HttpClientService } from './services/http-client';
import { WaitlistsService } from './services/waitlists';
import { ServersService } from './services/servers';
import { KeystoneModuleConfig } from './keystone.types';

@Module({
  providers: [KeystoneClientService, WaitlistsService, ServersService],
  exports: [KeystoneClientService],
})
export class KeystoneModule {
  public static forRoot({ schemaUrl }: KeystoneModuleConfig): DynamicModule {
    const httpLink = new HttpLink({
      uri: schemaUrl,
      fetch,
    });

    const retryLink = new RetryLink({
      attempts: {
        max: 5,
      },
      delay: {
        initial: 500,
        max: 5000,
        jitter: true,
      },
    });

    const link = ApolloLink.from([retryLink, httpLink]);

    return {
      global: true,
      module: KeystoneModule,
      providers: [
        {
          provide: HttpClientService,
          useValue: new HttpClientService({
            schemaUrl,
          }),
        },
        {
          provide: GqlClientService,

          useValue: new GqlClientService({
            link: link,
            cache: new InMemoryCache({}),
            defaultOptions: {
              watchQuery: {
                fetchPolicy: 'no-cache',
                errorPolicy: 'ignore',
              },
              query: {
                fetchPolicy: 'no-cache',
                errorPolicy: 'all',
              },
              mutate: {
                fetchPolicy: 'no-cache',
              },
            },
          }),
        },
      ],
    };
  }
}
