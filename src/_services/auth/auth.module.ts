import * as admin from 'firebase-admin';
import { DynamicModule, Module } from '@nestjs/common';

import { AuthClientService } from './services/auth-client';

@Module({
  providers: [],
  exports: [],
})
export class AuthModule {
  public static forRoot(config: string | admin.ServiceAccount): DynamicModule {
    return {
      module: AuthModule,
      providers: [
        {
          provide: AuthClientService,
          useFactory: () => {
            return admin
              .initializeApp({
                credential: admin.credential.cert(
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                  typeof config === 'string' ? JSON.parse(config) : config,
                ),
              })
              .auth();
          },
        },
      ],
    };
  }
}
