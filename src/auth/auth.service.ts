import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.getUser({ email });

    if (!user) return;

    const { password: userPassword, ...rest } = user.toObject();

    if (userPassword === password) {
      return rest;
    }
  }
}
