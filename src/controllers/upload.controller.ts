import { Controller, Post, UseInterceptors, UploadedFile, Get, Param, Res, BadRequestException } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import * as fs from 'fs';
import { v2 as cloudinary } from 'cloudinary';

@Controller('upload')
export class UploadController {
  constructor() {
    // Ensure temp uploads directory exists
    if (!fs.existsSync('./uploads')) {
      fs.mkdirSync('./uploads');
    }

    // Configure Cloudinary
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
  }

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          callback(null, `${uniqueSuffix}${ext}`);
        },
      }),
      fileFilter: (req, file, callback) => {
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif|webp)$/)) {
          return callback(new BadRequestException('Chỉ hỗ trợ tải lên file ảnh!'), false);
        }
        callback(null, true);
      },
    }),
  )
  async uploadFile(@UploadedFile() file: any) {
    if (!file) {
      throw new BadRequestException('Không tìm thấy file ảnh tải lên!');
    }

    try {
      // Upload temp local file to Cloudinary
      const result = await cloudinary.uploader.upload(file.path, {
        folder: 'portfolio',
      });

      // Safely delete temp local file
      if (fs.existsSync(file.path)) {
        fs.unlinkSync(file.path);
      }

      return {
        url: result.secure_url,
      };
    } catch (error) {
      // Clean up temp file on error
      if (fs.existsSync(file.path)) {
        fs.unlinkSync(file.path);
      }
      throw new BadRequestException('Tải ảnh lên Cloudinary thất bại: ' + error.message);
    }
  }

  @Get(':filename')
  seeUploadedFile(@Param('filename') filename: string, @Res() res: any) {
    return res.sendFile(filename, { root: './uploads' });
  }
}
