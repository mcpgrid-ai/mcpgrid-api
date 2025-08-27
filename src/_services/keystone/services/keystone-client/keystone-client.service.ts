import { Injectable } from '@nestjs/common';

import { WaitlistsService } from '../waitlists';

@Injectable()
export class KeystoneClientService {
  public constructor(public waitlists: WaitlistsService) {}
}
