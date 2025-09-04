import { PaginatedQuery, PaginatedResponse } from '@common/dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class ServerItem {
  @ApiProperty({
    type: String,
  })
  public readonly id: string;

  @ApiProperty({
    type: String,
    nullable: true,
    required: false,
  })
  public readonly slug?: string | null;

  @ApiProperty({
    type: String,
    nullable: true,
    required: false,
  })
  public readonly title?: string | null;

  @ApiProperty({
    type: String,
    nullable: true,
    required: false,
  })
  public readonly owner?: string | null;

  @ApiProperty({
    type: String,
    nullable: true,
    required: false,
  })
  public readonly description?: string | null;

  @ApiProperty({
    type: Boolean,
    nullable: true,
    required: false,
  })
  public readonly isOfficial?: boolean | null;

  @ApiProperty({
    type: String,
    nullable: true,
    required: false,
  })
  public readonly logo?: string | null;

  @ApiProperty({
    type: String,
    nullable: true,
    required: false,
  })
  public readonly icon?: string | null;
}

export class GetServersRequest extends PaginatedQuery {
  @ApiProperty({
    type: String,
    required: false,
  })
  @IsOptional()
  @IsString()
  public readonly q: string;

  @ApiProperty({
    type: String,
    required: false,
  })
  @IsOptional()
  @IsString()
  public readonly category: string;
}

export class GetServersResponse extends PaginatedResponse<ServerItem> {
  @ApiProperty({
    type: ServerItem,
    isArray: true,
  })
  public readonly data: ServerItem[];
}
