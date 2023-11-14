import { UsersService } from './users.service';
import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { User } from '@prisma/client';

@Controller()
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/user')
  async createUser(@Body() loginDto: LoginDto): Promise<User> {
    return this.usersService.createUser(loginDto);
  }
}
