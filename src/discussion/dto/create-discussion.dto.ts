// discussion/dto/create-discussion.dto.ts

import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateDiscussionDto {
  @IsNotEmpty()
  userId: string;

  @IsOptional()
  @IsString()
  text: string;

  @IsOptional()
  @IsString()
  imageUrl: string;

  @IsOptional()
  @IsString({ each: true })
  hashtags: string[];
}
