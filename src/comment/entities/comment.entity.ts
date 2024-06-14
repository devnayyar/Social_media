// comment/entities/comment.entity.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { User } from 'src/user/schemas/user.schema'; // Import the User entity
import { Discussion } from '../../discussion/entities/discussion.entity'; // Import the Discussion entity

@Schema()
export class Comment extends Document {
  @Prop({ type: SchemaTypes.ObjectId, ref: 'Discussion', required: true })
  discussionId: Discussion;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'User', required: true })
  userId: User;

  @Prop({ required: true })
  text: string;

  @Prop({ default: Date.now })
  createdOn: Date;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
