import { User } from '@prisma/client';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

  async validateUser(loginId: string, pass: string): Promise<any> {
    const curUser = await this.userService.findOne(loginId);

    if (curUser === null) {
      throw new HttpException(
        `ID: ${loginId}, ID not found. Try again`,
        HttpStatus.NOT_FOUND,
      );
    }

    const validatePassword = await bcrypt.compare(pass, curUser.password);

    if (!validatePassword) {
      throw new HttpException(
        `ID: ${loginId}, Wrong password. Try again`,
        HttpStatus.BAD_REQUEST,
      );
    }

    const { password, ...result } = curUser;

    return result;
  }

  async login(user: User): Promise<TokenResponse> {
    const payload = { sub: user.id, loginId: user.loginId };

    return { access_token: this.jwtService.sign(payload) };
  }
}
