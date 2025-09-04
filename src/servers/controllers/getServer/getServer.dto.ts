import { ApiProperty } from '@nestjs/swagger';

export class ServerSetting {
  @ApiProperty({
    type: String,
  })
  public readonly name: string;

  @ApiProperty({
    type: Boolean,
  })
  public readonly required: boolean;

  @ApiProperty({
    type: String,
    required: false,
  })
  public readonly description?: string;

  @ApiProperty({
    type: Boolean,
  })
  public secured: boolean;
}

export class ServerToolParameter {
  @ApiProperty({
    type: String,
  })
  public readonly name: string;

  @ApiProperty({
    type: String,
  })
  public readonly type: string;

  @ApiProperty({
    type: String,
    required: false,
  })
  public readonly description?: string;

  @ApiProperty({
    type: Boolean,
    required: false,
  })
  public readonly required?: boolean;
}

export class ServerTool {
  @ApiProperty({
    type: String,
  })
  public readonly id: string;

  @ApiProperty({
    type: String,
    required: false,
  })
  public readonly description?: string;

  @ApiProperty({
    type: ServerToolParameter,
    required: false,
    isArray: true,
  })
  public readonly parameters?: ServerToolParameter[];
}

export class GetServerResponse {
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
  public readonly githubOwner?: string | null;

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

  @ApiProperty({
    type: String,
    nullable: true,
    required: false,
  })
  public readonly homepage?: string | null;

  @ApiProperty({
    type: String,
    nullable: true,
    required: false,
  })
  public readonly githubUrl?: string | null;

  @ApiProperty({
    type: String,
    nullable: true,
    required: false,
  })
  public readonly githubLanguage?: string | null;

  @ApiProperty({
    type: String,
    nullable: true,
    required: false,
  })
  public readonly githubLicense?: string | null;

  @ApiProperty({
    type: String,
    nullable: true,
    required: false,
    format: 'date-time',
  })
  public readonly githubPublishedAt?: string | null;

  @ApiProperty({
    type: String,
    nullable: true,
    required: false,
  })
  public readonly overview?: string | null;

  @ApiProperty({
    type: ServerTool,
    isArray: true,
    nullable: true,
    required: false,
  })
  public readonly tools?: ServerTool[] | null;

  @ApiProperty({
    type: ServerSetting,
    isArray: true,
    nullable: true,
    required: false,
  })
  public readonly settings?: ServerSetting[] | null;
}
