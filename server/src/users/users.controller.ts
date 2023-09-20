import { UsersService } from './users.service';
import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AuthService } from 'src/auth/auth.service';

@Controller()
export class UsersController {
  constructor(
    private usersService: UsersService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post('/user')
  async createUser(@Body() loginDto: LoginDto): Promise<void> {
    return this.usersService.createUser(loginDto);
  }
}
