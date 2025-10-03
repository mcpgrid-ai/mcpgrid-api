import * as admin from 'firebase-admin';
import { DynamicModule, Module } from '@nestjs/common';

import { AuthClientService } from './services/auth-client';
import { AuthModuleConfig } from './auth.types';

@Module({
  providers: [],
  exports: [],
})
export class AuthModule {
  public static forRoot({ config, secret }: AuthModuleConfig): DynamicModule {
    return {
      module: AuthModule,
      providers: [
        {
          provide: 'SESSION_SECRET',
          useValue: secret,
        },
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
