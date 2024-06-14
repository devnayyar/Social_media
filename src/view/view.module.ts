import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ViewController } from './view.controller';
import { ViewService } from './view.service';
import { View, ViewSchema } from './entities/view.entity'; // Import the View entity
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: View.name, schema: ViewSchema }]),AuthModule], // Import the View model
  controllers: [ViewController],
  providers: [ViewService]
})
export class ViewModule {}
