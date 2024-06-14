// update-user.dto.ts

import { IsOptional, IsString, IsEmail } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  mobileNo?: string;

  @IsOptional()
  @IsEmail()
  email?: string;
}
