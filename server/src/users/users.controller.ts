import { Body, Controller, Get, Param, Post, Query, Req } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { TokenResponse } from './dto/token.dto';
import { UserLoginDto } from './dto/user-login.dto';

@Controller()
export class UsersController {
  @Post('/login')
  async login(@Body() dto: UserLoginDto): Promise<string> {
    console.log(dto);
    return "token";
  }

  @Post('/user')
  async createUser(@Body() userId: string): Promise<string> {
    console.log(userId);
    return userId;
  }
}
