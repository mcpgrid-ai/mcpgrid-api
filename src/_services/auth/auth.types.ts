import { ServiceAccount } from 'firebase-admin';

export interface AuthModuleConfig {
  accountKey: string | ServiceAccount;
}
