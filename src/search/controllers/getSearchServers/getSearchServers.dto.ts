import { PaginatedQuery, PaginatedResponse, HubIcon } from '@common/dto';
import { ApiProperty } from '@nestjs/swagger';

export class ServerItem {
  @ApiProperty({
    type: String,
  })
  public readonly id: string;

  @ApiProperty({
    type: String,
  })
  public readonly title: string;

  @ApiProperty({
    type: HubIcon,
  })
  public readonly icon: HubIcon;

  @ApiProperty({
    type: String,
    nullable: true
  })
  public readonly logo: string | null;
}

export class GetSearchServersRequest extends PaginatedQuery {
  @ApiProperty({
    type: String,
  })
  public readonly q: string;
}

export class GetSearchServersResponse extends PaginatedResponse<ServerItem> {
  @ApiProperty({
    type: ServerItem,
    isArray: true,
  })
  public readonly data: ServerItem[];
}
