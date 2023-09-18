import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import * as jwt from 'jsonwebtoken';
import { User } from '@prisma/client';
import { ConfigType } from '@nestjs/config';
import authConfig from 'src/config/authConfig';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private authService: AuthService
  ) {}

  async login(loginId: string): Promise<string> {
    const curUser = await this.findUser(loginId);

    if (curUser === null) {
      throw new HttpException(
        `ID: ${loginId}, User not found. Try again`,
        HttpStatus.NOT_FOUND,
      );
    }

    return this.authService.login(curUser);
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
