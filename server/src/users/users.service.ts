import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { User } from '@prisma/client';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
  ) {}

  async createUser(loginDto: LoginDto): Promise<void> {
    const loginId = loginDto.loginId;

    const curUser = await this.findOne(loginId);

    if (curUser) {
      throw new HttpException(
        `ID: ${loginId}, ID duplicated. Try again with other ID`,
        HttpStatus.CONFLICT,
      );
    }

    const password = await this.transformPassword(loginDto.password);

    await this.saveUser(loginId, password);

    return;
  }

  findOne = async (loginId: string): Promise<User> => {
    const user = await this.prisma.user.findUnique({
      where: {
        loginId: loginId,
      },
    });

    return user;
  };

  private saveUser = async (loginId: string, password: string): Promise<void> => {
    const user = await this.prisma.user.create({
      data: {
        loginId,
        password
      },
    });
  };

  private async transformPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
  }
}
