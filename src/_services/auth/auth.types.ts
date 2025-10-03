import { ServiceAccount } from 'firebase-admin';

export interface AuthModuleConfig {
  secret: string;
  config: string | ServiceAccount;
}
