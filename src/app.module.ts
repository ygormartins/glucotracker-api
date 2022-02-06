import { Module } from '@nestjs/common';
import { ReadingsModule } from './readings/readings.module';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    DatabaseModule,
    ReadingsModule,
    ConfigModule,
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
