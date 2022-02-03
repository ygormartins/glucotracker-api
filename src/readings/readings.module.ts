import { Module } from '@nestjs/common';
import { ReadingsService } from './readings.service';
import { ReadingsController } from './readings.controller';
import { Reading, ReadingSchema } from './readings.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Reading.name, schema: ReadingSchema }]),
  ],
  controllers: [ReadingsController],
  providers: [ReadingsService],
})
export class ReadingsModule {}
