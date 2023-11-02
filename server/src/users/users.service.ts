import {
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { User } from '@prisma/client';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(loginDto: LoginDto): Promise<void> {
    const username = loginDto.username;

    const curUser = await this.findOne(username);

    if (curUser) throw new ConflictException(`ID: ${username}, ID duplicated.`);

    const password = await this.transformPassword(loginDto.password);

    await this.saveUser(username, password);

    return;
  }

  findOne = async (username: string): Promise<User> => {
    const user = await this.prisma.user.findUnique({
      where: {
        username,
      },
    });

    return user;
  };

  private saveUser = async (
    username: string,
    password: string,
  ): Promise<void> => {
    const user = await this.prisma.user.create({
      data: {
        username,
        password,
      },
    });
  };

  private async transformPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
  }
}
