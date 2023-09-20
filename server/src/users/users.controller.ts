import { UsersService } from './users.service';
import { Body, Controller, Get, Param, Post, Query, Req } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { TokenResponse } from './dto/token.dto';
import { LoginDto } from './dto/login.dto';

@Controller()
export class UsersController {
  constructor(private usersService: UsersService) {}
  
  @Post('/login')
  async login(@Body() loginDto: LoginDto): Promise<string> {
    return this.usersService.login(loginDto);
  }

  @Post('/user')
  async createUser(@Body() loginDto: LoginDto): Promise<void> {
    return this.usersService.createUser(loginDto);
  }
}
