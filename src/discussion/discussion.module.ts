import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DiscussionController } from './discussion.controller';
import { DiscussionService } from './discussion.service';
import { Discussion, DiscussionSchema } from './entities/discussion.entity'; // Import the Discussion entity
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: Discussion.name, schema: DiscussionSchema }]),AuthModule], // Import the Discussion model
  controllers: [DiscussionController],
  providers: [DiscussionService]
})
export class DiscussionModule {}
