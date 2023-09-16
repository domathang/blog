import { UsersService } from './users.service';
import { Body, Controller, Get, Param, Post, Query, Req } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { TokenResponse } from './dto/token.dto';
import { UserLoginDto } from './dto/user-login.dto';

@Controller()
export class UsersController {
  constructor(private usersService: UsersService) {}
  
  @Post('/login')
  async login(@Body() userLoginDto: UserLoginDto): Promise<TokenResponse> {
    const loginId = userLoginDto.loginId;
    return this.usersService.login(loginId);
  }

  @Post('/user')
  async createUser(@Body() userLoginDto: UserLoginDto): Promise<void> {
    const loginId = userLoginDto.loginId;
    return this.usersService.createUser(loginId);
  }
}
