import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GqlClientService extends ApolloClient<NormalizedCacheObject> {}
