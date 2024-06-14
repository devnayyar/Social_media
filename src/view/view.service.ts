// view/services/view.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { View } from './entities/view.entity';

@Injectable()
export class ViewService {
  constructor(@InjectModel(View.name) private viewModel: Model<View>) {}

  async incrementViewCount(discussionId: string): Promise<number> {
    let view = await this.viewModel.findOne({ discussionId }).exec();
    if (!view) {
      view = new this.viewModel({ discussionId, count: 1 });
    } else {
      view.viewCount += 1;
    }
    await view.save();
    return view.viewCount;
  }

  async getViewCount(discussionId: string): Promise<number | null> {
    const view = await this.viewModel.findOne({ discussionId }).exec();
    return view ? view.viewCount : null; // Return null if view not found
  }
}
