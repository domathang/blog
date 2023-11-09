import {
  Controller,
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller()
@UseGuards(JwtAuthGuard)
export class FileController {
  @Post('/clothes/image')
  @UseInterceptors(FileInterceptor('file'))
  async uploadClothesImage(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 100000 }),
          new FileTypeValidator({ fileType: 'image/(png|jpeg|jpg)' }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    return { imgUrl: file['location'] };
  }
}
