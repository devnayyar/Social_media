// discussion/discussion.controller.ts

import { Controller, Get, Post, Body, Patch, Param, Delete ,Query} from '@nestjs/common';
import { DiscussionService } from './discussion.service';
import { CreateDiscussionDto } from './dto/create-discussion.dto';
import { UpdateDiscussionDto } from './dto/update-discussion.dto';

@Controller('discussions')
export class DiscussionController {
  constructor(private readonly discussionService: DiscussionService) {}

  @Post()
  create(@Body() createDiscussionDto: CreateDiscussionDto) {
    return this.discussionService.create(createDiscussionDto);
  }

  @Get()
  findAll() {
    return this.discussionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.discussionService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDiscussionDto: UpdateDiscussionDto) {
    return this.discussionService.update(id, updateDiscussionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.discussionService.remove(id);
  }

  @Get('/hashtag/:hashtag')
  findByHashtag(@Param('hashtag') hashtag: string) {
    return this.discussionService.findByHashtag(hashtag);
  }

  @Get('/search')
  searchText(@Query('text') text: string) {
    return this.discussionService.searchByText(text);
  }
}
