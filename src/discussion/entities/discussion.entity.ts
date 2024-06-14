// discussion/entities/discussion.entity.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { User } from 'src/user/schemas/user.schema';

@Schema()
export class Discussion extends Document {
  @Prop({ type: SchemaTypes.ObjectId, ref: 'User', required: true })
  userId: User;

  @Prop()
  text: string;

  @Prop()
  imageUrl: string;

  @Prop()
  hashtags: string[];

  @Prop({ default: Date.now })
  createdOn: Date;
}

export const DiscussionSchema = SchemaFactory.createForClass(Discussion);
