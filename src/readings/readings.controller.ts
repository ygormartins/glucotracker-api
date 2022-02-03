import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ReadingsService } from './readings.service';
import { CreateReadingDto } from './dto/create-reading.dto';
import { UpdateReadingDto } from './dto/update-reading.dto';

@Controller('readings')
export class ReadingsController {
  constructor(private readonly readingsService: ReadingsService) {}

  @Get()
  async findAll() {
    return await this.readingsService.getReadings();
  }

  @Post()
  async create(@Body() body: CreateReadingDto) {
    return await this.readingsService.createReading(body);
  }

  @Put(':id')
  async update(@Param('id') readingId: string, @Body() body: UpdateReadingDto) {
    return await this.readingsService.updateReading(readingId, body);
  }

  @Delete(':id')
  async delete(@Param('id') readingId: string) {
    return await this.readingsService.deleteReading(readingId);
  }
}
