import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseModuleService } from './mongoose.config.service';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: MongooseModuleService,
    }),
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {}
