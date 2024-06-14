// comment/services/comment.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comment } from './entities/comment.entity';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentService {
  constructor(@InjectModel(Comment.name) private commentModel: Model<Comment>) {}

  async create(createCommentDto: CreateCommentDto): Promise<Comment> {
    const createdComment = new this.commentModel(createCommentDto);
    return createdComment.save();
  }

  async findAll(): Promise<Comment[]> {
    return this.commentModel.find().exec();
  }

  async findOne(id: string): Promise<Comment> {
    return this.commentModel.findById(id).exec();
  }

  async remove(id: string): Promise<Comment> {
    return this.commentModel.findOneAndDelete({ _id: id }).exec();
  }
}
