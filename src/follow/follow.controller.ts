// follow/follow.controller.ts

import { Controller, Post, Delete, Body, Get, Param } from '@nestjs/common';
import { FollowService } from './follow.service';
import { CreateFollowDto } from './dto/create-follow.dto';
import { RemoveFollowDto } from './dto/remove-follow.dto';

@Controller('follow')
export class FollowController {
  constructor(private readonly followService: FollowService) {}

  @Post()
  create(@Body() createFollowDto: CreateFollowDto) {
    return this.followService.create(createFollowDto);
  }

  @Delete()
  remove(@Body() removeFollowDto: RemoveFollowDto) {
    return this.followService.remove(removeFollowDto);
  }

  @Get('follower/:id')
  findAllByFollowerId(@Param('id') followerId: string) {
    return this.followService.findAllByFollowerId(followerId);
  }

  @Get('followed/:id')
  findAllByFollowedId(@Param('id') followedId: string) {
    return this.followService.findAllByFollowedId(followedId);
  }
}
