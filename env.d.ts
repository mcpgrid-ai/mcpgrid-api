declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;
    MEILISEARCH_HOST: string;
    MEILISEARCH_API_KEY: string;
    CORS_ORIGIN_WHITELIST: string;
    CLOUDINARY_API_KEY: string;
    CLOUDINARY_API_SECRET: string;
    CLOUDINARY_CLOUD_NAME: string;
    KEYSTONE_GRAPHQL_SCHEMA_URL: string;
    GCP_PUB_SUB_API_ENDPOINT: string;
    GCP_PUB_SUB_DEPLOYER_TOPIC: string;
    GCP_PROJECT_ID: string;
  }
}
