import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import * as jwt from 'jsonwebtoken';
import { User } from '@prisma/client';
import { TokenResponse } from './dto/token.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async login(loginId: string): Promise<TokenResponse> {
    const curUser = await this.findUser(loginId);

    if (curUser === null) {
      throw new HttpException(
        `ID: ${loginId}, User not found. Try again`,
        HttpStatus.NOT_FOUND,
      );
    }

    const secretKey = process.env.SECRET_KEY;

    const token = jwt.sign({ id: loginId }, secretKey, {
      expiresIn: '14 days',
    });

    return TokenResponse.of(token);
  }

  async createUser(loginId: string): Promise<void> {
    const curUser = await this.findUser(loginId);

    if (curUser) {
      throw new HttpException(
        `ID: ${loginId}, ID duplicated. Try again with other ID`,
        HttpStatus.CONFLICT,
      );
    }

    await this.saveUser(loginId);

    return;
  }

  private findUser = async (loginId: string): Promise<User> => {
    const user = await this.prisma.user.findUnique({
      where: {
        loginId: loginId,
      },
    });

    return user;
  };

  private saveUser = async (loginId: string): Promise<void> => {
    const user = await this.prisma.user.create({
      data: {
        loginId: loginId,
      },
    });
  };
}
