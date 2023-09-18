import { validationSchema } from './config/validationSchema';
import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { ClothesController } from './clothes/clothes.controller';
import { UsersService } from './users/users.service';
import { PrismaService } from './prisma.service';
import { ConfigModule } from '@nestjs/config';
import authConfig from './config/authConfig';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`${__dirname}/config/env/.${process.env.NODE_ENV}.env`],
      load: [authConfig],
      validationSchema
    }),
  ],
  controllers: [UsersController, ClothesController],
  providers: [UsersService, PrismaService, AuthService],
})
export class AppModule {}
