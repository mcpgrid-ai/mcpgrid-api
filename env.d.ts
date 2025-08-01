declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;
    MEILISEARCH_HOST: string;
    MEILISEARCH_API_KEY: string;
    CORS_ORIGIN_WHITELIST: string;
  }
}
