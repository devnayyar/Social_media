import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FollowController } from './follow.controller';
import { FollowService } from './follow.service';
import { Follow, FollowSchema } from './entities/follow.entity'; // Import the Follow entity
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: Follow.name, schema: FollowSchema }]),AuthModule], // Import the Follow model
  controllers: [FollowController],
  providers: [FollowService]
})
export class FollowModule {}
