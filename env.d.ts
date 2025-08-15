declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;
    MEILISEARCH_HOST: string;
    MEILISEARCH_API_KEY: string;
    CORS_ORIGIN_WHITELIST: string;
    CLOUDINARY_API_KEY: string;
    CLOUDINARY_API_SECRET: string;
    CLOUDINARY_CLOUD_NAME: string;
  }
}
