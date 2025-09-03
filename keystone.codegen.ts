import { CodegenConfig } from '@graphql-codegen/cli';
import { config as init } from 'dotenv';

init();

const config: CodegenConfig = {
  schema: [
    {
      [`${process.env.KEYSTONE_GRAPHQL_SCHEMA_URL}`]: {},
    },
  ],
  ignoreNoDocuments: true,
  generates: {
    './src/_services/keystone/__generated__/query.ts': {
      config: {
        documentVariableSuffix: 'Document',
      },
      documents: ['./src/_services/keystone/documents/**/*.graphql'],
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-document-nodes',
      ],
    },
  },
  config: {
    dedupeFragments: true,
  },
};

export default config;
