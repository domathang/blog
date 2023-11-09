import { validationSchema } from './config/validationSchema';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import authConfig from './config/authConfig';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma.module';
import { ClothesModule } from './clothes/clothes.module';
import { FileModule } from './file/file.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`${__dirname}/config/env/.${process.env.NODE_ENV}.env`],
      load: [authConfig],
      validationSchema,
    }),
    AuthModule,
    UsersModule,
    PrismaModule,
    ClothesModule,
    FileModule,
  ],
})
export class AppModule {}
