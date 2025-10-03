import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  public canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest<Request>();

    const test = req.cookies['next-auth.session-token'] as string;
    console.log(test);

    if (!test) throw new UnauthorizedException();

    return true;
  }
}
