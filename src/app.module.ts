import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { DiscussionModule } from './discussion/discussion.module';
import { CommentModule } from './comment/comment.module';
import { LikeModule } from './like/like.module';
import { FollowModule } from './follow/follow.module';
import { ViewModule } from './view/view.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';// Corrected import

@Module({
  imports: [
    AuthModule,
    UserModule,
    DiscussionModule,
    CommentModule,
    LikeModule,
    FollowModule,
    ViewModule,
    ConfigModule.forRoot({
      isGlobal: true, // makes ConfigModule globally available
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [],
  providers: [
  ],
})
export class AppModule {}
