import { ConfigService, ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { multerOptionsFactory } from './multer-options.factory';
import { FileController } from './file.controller';
import { PrismaModule } from 'src/prisma.module';

@Module({
  imports: [
    MulterModule.registerAsync({
      imports: [ConfigModule],
      useFactory: multerOptionsFactory,
      inject: [ConfigService],
    }),
    PrismaModule,
  ],
  controllers: [FileController],
})
export class FileModule {}
