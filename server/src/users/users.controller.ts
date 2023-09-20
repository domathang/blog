import { UsersService } from './users.service';
import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';

@Controller()
export class UsersController {
  constructor(
    private usersService: UsersService,
  ) {}
  @Post('/user')
  async createUser(@Body() loginDto: LoginDto): Promise<void> {
    return this.usersService.createUser(loginDto);
  }
}
