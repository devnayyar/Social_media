// create-user.dto.ts

import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  mobileNo: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
