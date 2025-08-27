import { ApiProperty } from '@nestjs/swagger';

const CLIENT_ERROR_RESPONSES_CODES = Array.from({ length: 31 })
  .map((_, index) => 400 + index)
  .concat([451]);

const SERVER_ERROR_RESPONSES_CODES = Array.from({ length: 11 }).map(
  (_, index) => 400 + index,
);

export abstract class ApiException {
  @ApiProperty({
    enum: [...CLIENT_ERROR_RESPONSES_CODES, ...SERVER_ERROR_RESPONSES_CODES],
  })
  public readonly statusCode: number;

  @ApiProperty({
    type: String,
  })
  public readonly error: string;

  @ApiProperty({
    oneOf: [
      {
        type: 'string',
      },
      {
        type: 'array',
        items: {
          type: 'string',
        },
      },
    ],
  })
  public readonly message: string | string[];

  @ApiProperty({
    type: String,
    required: false,
  })
  public readonly code?: string;
}
