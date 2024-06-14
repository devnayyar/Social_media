// like/entities/like.entity.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { User } from 'src/user/schemas/user.schema';
import { Discussion } from '../../discussion/entities/discussion.entity'; // Import the Discussion entity
import { Comment } from '../../comment/entities/comment.entity'; // Import the Comment entity

@Schema()
export class Like extends Document {
  @Prop({ type: SchemaTypes.ObjectId, ref: 'Discussion' })
  discussionId: Discussion;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'User' })
  userId: User;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Comment' })
  commentId: Comment;
}

export const LikeSchema = SchemaFactory.createForClass(Like);
