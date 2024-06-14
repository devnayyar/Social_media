// like/dto/create-like.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateLikeDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly discussionId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly userId: string;

  @ApiProperty()
  @IsString()
  readonly commentId: string;
}
