import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { ClothesController } from './clothes/clothes.controller';

@Module({
  imports: [],
  controllers: [UsersController, ClothesController],
  providers: [],
})
export class AppModule {}
