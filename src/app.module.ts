import { Module } from '@nestjs/common';
import { ReadingsModule } from './readings/readings.module';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, ReadingsModule, ConfigModule],
})
export class AppModule {}
