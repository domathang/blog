import { BadRequestException, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    if (typeof username !== 'string' || typeof password !== 'string') {
      throw new BadRequestException("username or password is not string type");
    }

    const user = await this.authService.validateUser(username, password);
    return user;
  }
}
