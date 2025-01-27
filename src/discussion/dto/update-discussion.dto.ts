// discussion/dto/update-discussion.dto.ts

import { PartialType } from '@nestjs/mapped-types';
import { CreateDiscussionDto } from './create-discussion.dto';

export class UpdateDiscussionDto extends PartialType(CreateDiscussionDto) {}
