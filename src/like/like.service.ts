// like/services/like.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Like } from './entities/like.entity';
import { CreateLikeDto } from './dto/create-like.dto';

@Injectable()
export class LikeService {
  constructor(@InjectModel(Like.name) private likeModel: Model<Like>) {}

  async create(createLikeDto: CreateLikeDto): Promise<Like> {
    const createdLike = new this.likeModel(createLikeDto);
    return createdLike.save();
  }

  async findAll(): Promise<Like[]> {
    return this.likeModel.find().exec();
  }

  async findOne(id: string): Promise<Like> {
    return this.likeModel.findById(id).exec();
  }

  async remove(id: string): Promise<Like> {
    return this.likeModel.findOneAndDelete({ _id: id }).exec();
  }
  
}
