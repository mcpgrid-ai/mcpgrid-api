import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, Min } from 'class-validator';
import { Transform } from 'class-transformer';

export class PaginatedQuery {
  @ApiProperty({
    name: 'take',
    type: Number,
    required: false,
  })
  @IsInt()
  @IsOptional()
  @Min(1)
  @Transform(({ value }) => parseInt(value, 10))
  public readonly take: number = 25;

  @ApiProperty({
    name: 'skip',
    type: Number,
    required: false,
  })
  @IsInt()
  @IsOptional()
  @Min(1)
  @Transform(({ value }) => parseInt(value, 10))
  public readonly skip: number;
}
