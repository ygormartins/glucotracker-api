import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll() {
    return await this.usersService.getAllUsers();
  }

  @Post()
  async create(@Body() body: CreateUserDto) {
    return await this.usersService.createUser(body);
  }

  @Put(':id')
  async update(@Param('id') userId: string, @Body() body: UpdateUserDto) {
    return await this.usersService.updateUser(userId, body);
  }

  @Delete(':id')
  async delete(@Param('id') userId: string) {
    return await this.usersService.deleteUser(userId);
  }
}
