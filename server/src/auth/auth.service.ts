import { User } from '@prisma/client';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { TokenResponse } from 'src/users/dto/token.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const curUser = await this.userService.findOne(username);

    if (curUser === null)
      throw new NotFoundException(`ID: ${username}, ID not found.`);

    const validatePassword = await bcrypt.compare(pass, curUser.password);

    if (!validatePassword)
      throw new BadRequestException(`ID: ${username}, Wrong password.`);

    const { password, ...result } = curUser;

    return result;
  }

  async login(user: User): Promise<TokenResponse> {
    const payload = { sub: user.id, username: user.username };

    return { access_token: this.jwtService.sign(payload) };
  }
}
