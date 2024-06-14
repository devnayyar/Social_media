import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LikeController } from './like.controller';
import { LikeService } from './like.service';
import { Like, LikeSchema } from './entities/like.entity'; // Import the Like entity
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: Like.name, schema: LikeSchema }]),AuthModule], // Import the Like model
  controllers: [LikeController],
  providers: [LikeService]
})
export class LikeModule {}
