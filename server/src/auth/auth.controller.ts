import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { UserCtx } from './decorators/user-ctx.decorator';
import { UserContext } from './decorators/user-context.dto';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@UserCtx() userCtx: UserContext) {
    
    return this.authService.login(userCtx);
  }
}