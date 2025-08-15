import { ServerRecord } from './getServers.types';

export const SERVER_FIELDS: (keyof ServerRecord)[] = [
  // @ts-expect-error x3 error
  'category.icon._meta',
  // @ts-expect-error x3 error
  'category.slug',
  'title',
  'id',
  // @ts-expect-error x3 error
  'icon._meta',
  'slug',
  'githubOwner',
  'description',
  'isOfficial',
];
