import { Injectable } from '@nestjs/common';
import { Auth } from 'firebase-admin/auth';

@Injectable()
export class AuthClientService extends Auth {}
