// view/entities/view.entity.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document,SchemaTypes } from 'mongoose';
import { Discussion } from '../../discussion/entities/discussion.entity'; // Import the Discussion entity

@Schema()
export class View extends Document {
  @Prop({ type: SchemaTypes.ObjectId, ref: 'Discussion', required: true })
  discussionId: Discussion;

  @Prop({ default: 0 })
  viewCount: number;
}

export const ViewSchema = SchemaFactory.createForClass(View);
