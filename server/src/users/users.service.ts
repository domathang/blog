import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { User } from '@prisma/client';
import { AuthService } from 'src/auth/auth.service';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private authService: AuthService,
  ) {}

  async login(loginDto: LoginDto): Promise<string> {
    const loginId = loginDto.loginId;
    const curUser = await this.findUser(loginId);

    if (curUser === null) {
      throw new HttpException(
        `ID: ${loginId}, User not found. Try again`,
        HttpStatus.NOT_FOUND,
      );
    }
    
    const validatePassword = await bcrypt.compare(loginDto.password, curUser.password);
    
    if (!validatePassword) {
      throw new HttpException(
        `ID: ${loginId}, Wrong password. Try again`,
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.authService.login(curUser);
  }

  async createUser(loginDto: LoginDto): Promise<void> {
    const loginId = loginDto.loginId;

    const curUser = await this.findUser(loginId);

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

  private findUser = async (loginId: string): Promise<User> => {
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
