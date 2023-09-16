import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { ClothesController } from './clothes/clothes.controller';
import { UsersService } from './users/users.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [UsersController, ClothesController],
  providers: [UsersService, PrismaService],
})
export class AppModule {}
