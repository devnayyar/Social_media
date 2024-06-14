import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';
import { Comment, CommentSchema } from './entities/comment.entity'; // Import the Comment entity
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),AuthModule], // Import the Comment model
  controllers: [CommentController],
  providers: [CommentService]
})
export class CommentModule {}
