import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { ClothesController } from './clothes/clothes.controller';
import { UsersService } from './users/users.service';
import { PrismaService } from './prisma.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:
        process.env.NODE_ENV === 'production'
          ? '.production.env'
          : '.development.env',
    }),
  ],
  controllers: [UsersController, ClothesController],
  providers: [UsersService, PrismaService],
})
export class AppModule {}
