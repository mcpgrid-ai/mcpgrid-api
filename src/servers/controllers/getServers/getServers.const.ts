import { ServerRecord } from './getServers.types';

export const SERVER_FIELDS: (keyof ServerRecord)[] = [
  // @ts-expect-error x3 error
  'Category.Icon',
  // @ts-expect-error x3 error
  'Category.Slug',
  'Title',
  'documentId',
  // @ts-expect-error x3 error
  'Logo.url',
  'Slug',
  'GitHubOwner',
  'Description',
  'IsOfficial',
];
