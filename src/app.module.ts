import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CloudinaryModule } from '@services/cloudinary';
import { KeystoneModule } from '@services/keystone';
import { DeployerModule } from '@services/deployer';
import { AuthModule } from '@services/auth';

import { HealthModule } from './health';
import { InstancesModule } from './instances';
import { ServersModule } from './servers';
import { WaitlistsModule } from './waitlists';

@Module({
  imports: [
    ConfigModule.forRoot(),
    // Services
    DeployerModule.forRoot({
      apiEndpoint: process.env.GCP_PUB_SUB_API_ENDPOINT,
      topic: process.env.GCP_PUB_SUB_DEPLOYER_TOPIC,
      projectId: process.env.GCP_PROJECT_ID,
    }),
    KeystoneModule.forRoot({
      schemaUrl: process.env.KEYSTONE_GRAPHQL_SCHEMA_URL,
    }),
    CloudinaryModule.forRoot({
      apiKey: process.env.CLOUDINARY_API_KEY,
      apiSecret: process.env.CLOUDINARY_API_SECRET,
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    }),
    AuthModule.forRoot({
      accountKey: process.env.GCP_ADMIN_ACCOUNT_KEY,
    }),
    // Features
    HealthModule,
    InstancesModule,
    ServersModule,
    WaitlistsModule,
  ],
})
export class AppModule {}
