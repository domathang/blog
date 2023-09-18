import { User } from '@prisma/client';
import {
  HttpCode,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import authConfig from 'src/config/authConfig';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(
    @Inject(authConfig.KEY) private config: ConfigType<typeof authConfig>,
  ) {}

  login(user: User): string {
    const payload = { ...user };

    const secretKey = this.config.secretKey;

    const token = jwt.sign(payload, secretKey, {
      expiresIn: '14 days',
    });

    return token;
  }

  verify(jwtString: string) {
    try {
      const payload = jwt.verify(jwtString, this.config.secretKey) as (
        | jwt.JwtPayload
        | string
      ) &
        User;

      return payload;

    } catch (e) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }
  }
}
