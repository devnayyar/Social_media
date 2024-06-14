// follow/dto/create-follow.dto.ts

import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFollowDto {
  @IsNotEmpty()
  @IsString()
  followerId: string;

  @IsNotEmpty()
  @IsString()
  followedId: string;
}
