// follow/dto/remove-follow.dto.ts

import { IsNotEmpty, IsString } from 'class-validator';

export class RemoveFollowDto {
  @IsNotEmpty()
  @IsString()
  followerId: string;

  @IsNotEmpty()
  @IsString()
  followedId: string;
}
