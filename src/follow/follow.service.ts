// follow/follow.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Follow } from './entities/follow.entity';
import { CreateFollowDto } from './dto/create-follow.dto';
import { RemoveFollowDto } from './dto/remove-follow.dto';
@Injectable()
export class FollowService {
  constructor(@InjectModel(Follow.name) private followModel: Model<Follow>) {}

  async create(createFollowDto: CreateFollowDto): Promise<Follow> {
    const createdFollow = new this.followModel(createFollowDto);
    return createdFollow.save();
  }

  async remove(removeFollowDto: RemoveFollowDto): Promise<Follow> {
    return this.followModel.findOneAndDelete(removeFollowDto).exec();
  }

  async findAllByFollowerId(followerId: string): Promise<Follow[]> {
    return this.followModel.find({ followerId }).exec();
  }

  async findAllByFollowedId(followedId: string): Promise<Follow[]> {
    return this.followModel.find({ followedId }).exec();
  }
}
