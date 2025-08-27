import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateWaitlistRequest {
  @ApiProperty({
    type: String,
  })
  @IsEmail()
  @IsNotEmpty()
  public email: string;
}

export class CreateWaitlistResponse {
  @ApiProperty({
    type: String,
  })
  public id: string;
}
