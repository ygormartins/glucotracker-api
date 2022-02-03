import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DatabaseModel } from 'src/database/database.model';
import { CreateReadingDto } from './dto/create-reading.dto';
import { UpdateReadingDto } from './dto/update-reading.dto';
import { Reading, ReadingDocument } from './readings.schema';

@Injectable()
export class ReadingsService {
  constructor(
    @InjectModel(Reading.name)
    private readingModel: DatabaseModel<ReadingDocument>,
  ) {}

  async getReadings(): Promise<Reading[]> {
    return await this.readingModel.find();
  }

  async createReading(createReadingDto: CreateReadingDto): Promise<Reading> {
    return await this.readingModel.create(createReadingDto);
  }

  async updateReading(
    readingId: string,
    updateReadingDto: UpdateReadingDto,
  ): Promise<any> {
    return await this.readingModel.updateOne(
      { _id: readingId },
      updateReadingDto,
    );
  }

  async deleteReading(readingId: string): Promise<any> {
    return await this.readingModel.restore({ _id: readingId });
  }
}
