import { ApiProperty } from '@nestjs/swagger';

export abstract class PaginatedResponse<T extends object> {
  @ApiProperty({
    type: Number,
  })
  public readonly total: number;

  public abstract readonly data: T[];
}
