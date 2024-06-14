// follow/entities/follow.entity.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { User } from 'src/user/schemas/user.schema'; // Import the User entity

@Schema()
export class Follow extends Document {
  @Prop({ type: SchemaTypes.ObjectId, ref: 'User', required: true })
  followerId: User;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'User', required: true })
  followedId: User;
}

export const FollowSchema = SchemaFactory.createForClass(Follow);
