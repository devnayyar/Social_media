// discussion/discussion.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Discussion } from './entities/discussion.entity';
import { CreateDiscussionDto } from './dto/create-discussion.dto';
import { UpdateDiscussionDto } from './dto/update-discussion.dto';
@Injectable()
export class DiscussionService {
  constructor(@InjectModel(Discussion.name) private discussionModel: Model<Discussion>) {}

  async create(createDiscussionDto: CreateDiscussionDto): Promise<Discussion> {
    const createdDiscussion = new this.discussionModel(createDiscussionDto);
    return createdDiscussion.save();
  }

  async findAll(): Promise<Discussion[]> {
    return this.discussionModel.find().exec();
  }

  async findOne(id: string): Promise<Discussion> {
    return this.discussionModel.findById(id).exec();
  }

  async update(id: string, updateDiscussionDto: UpdateDiscussionDto): Promise<Discussion> {
    return this.discussionModel.findByIdAndUpdate(id, updateDiscussionDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Discussion> {
    return this.discussionModel.findByIdAndDelete(id).exec();
  }

  async findByHashtag(hashtag: string): Promise<Discussion[]> {
    return this.discussionModel.find({ hashtags: hashtag }).exec();
  }

  async searchByText(text: string): Promise<Discussion[]> {
    try {
      const regex = new RegExp(text, 'i');
      const discussions = await this.discussionModel.find({ text: { $regex: regex } }).exec();
      return discussions;
    } catch (error) {
      throw new Error(`Error searching discussions by text: ${error.message}`);
    }
  }
}
