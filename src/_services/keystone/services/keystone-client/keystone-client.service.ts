import { Injectable } from '@nestjs/common';

import { WaitlistsService } from '../waitlists';
import { ServersService } from '../servers';

@Injectable()
export class KeystoneClientService {
  public constructor(
    public waitlists: WaitlistsService,
    public servers: ServersService,
  ) {}
}
