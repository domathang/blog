import { ConfigService } from '@nestjs/config';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { S3Client } from '@aws-sdk/client-s3';
import * as multerS3 from 'multer-s3';

export const multerOptionsFactory = (
  configService: ConfigService,
): MulterOptions => {
  return {
    storage: multerS3({
      s3: new S3Client({
        region: configService.get<string>('AWS_REGION'),
        credentials: {
          accessKeyId: configService.get<string>('AWS_ACCESS_KEY_ID'),
          secretAccessKey: configService.get<string>('AWS_SECRET_ACCESS_KEY'),
        },
      }),
      bucket: configService.get<string>('BUCKET_NAME'),
      acl: 'public-read',
      metadata(req, file, cb) {
        cb(null, { fieldName: file.fieldname });
      },
      key(req, file, cb) {
        cb(null, `${Date.now().toString()}${file.originalname}`);
      },
    }),
  };
};
