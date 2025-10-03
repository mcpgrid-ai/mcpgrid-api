import * as admin from 'firebase-admin';
import { DynamicModule, Module } from '@nestjs/common';

import { AuthClientService } from './services/auth-client';
import { AuthGuard } from './guards/auth/auth.guard';
import { AuthModuleConfig } from './auth.types';

@Module({
  providers: [AuthGuard],
  exports: [AuthGuard],
})
export class AuthModule {
  public static forRoot({ accountKey }: AuthModuleConfig): DynamicModule {
    return {
      global: true,
      module: AuthModule,
      providers: [
        {
          provide: AuthClientService,
          useFactory: () => {
            return admin
              .initializeApp({
                credential: admin.credential.cert(
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                  typeof accountKey === 'string'
                    ? JSON.parse(accountKey)
                    : accountKey,
                ),
              })
              .auth();
          },
        },
      ],
      exports: [AuthClientService],
    };
  }
}
