/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
  Logger,
} from '@nestjs/common';
import { Request } from 'express';

import { AuthClientService } from '../../services/auth-client';

@Injectable()
export class AuthGuard implements CanActivate {
  private readonly logger = new Logger(AuthGuard.name, {
    timestamp: true,
  });

  public constructor(private readonly auth: AuthClientService) {}

  public async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest<Request>();

    const authorization = req.headers.authorization || '';

    const [, token] = authorization.split(' ');

    if (!token)
      throw new UnauthorizedException(
        'Missing or invalid Authorization header',
      );

    try {
      const user = await this.auth.verifyIdToken(token);

      if (!user) throw new UnauthorizedException('Invalid authorization token');

      req.user = user;

      return true;
    } catch (error) {
      this.logger.error(error);
      throw new UnauthorizedException('Invalid authorization token');
    }
  }
}
