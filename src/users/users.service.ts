import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DatabaseModel } from 'src/database/database.model';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './users.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private userModel: DatabaseModel<UserDocument>,
  ) {}

  async getAllUsers(): Promise<UserDocument[]> {
    return await this.userModel.find();
  }

  async getUser(filter: any): Promise<UserDocument> {
    return await this.userModel.findOne(filter);
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    return await this.userModel.create(createUserDto);
  }

  async updateUser(userId: string, updateUserDto: UpdateUserDto): Promise<any> {
    return await this.userModel.updateOne({ _id: userId }, updateUserDto);
  }

  async deleteUser(userId: string): Promise<any> {
    return await this.userModel.delete({ _id: userId });
  }
}
