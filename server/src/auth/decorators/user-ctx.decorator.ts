import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { UserContext } from './user-context.dto';

export const UserCtx = createParamDecorator(
  (_: unknown, ctx: ExecutionContext): UserContext => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
  },
);
