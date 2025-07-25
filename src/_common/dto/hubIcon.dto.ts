import { ApiProperty } from '@nestjs/swagger';

export class HubIcon {
  @ApiProperty({
    type: String,
  })
  public readonly iconData: string;

  @ApiProperty({
    type: String,
  })
  public readonly iconName: string;

  @ApiProperty({
    type: Number,
  })
  public readonly width: number;

  @ApiProperty({
    type: Number,
  })
  public readonly height: number;
}
