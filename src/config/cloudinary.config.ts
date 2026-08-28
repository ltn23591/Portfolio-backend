import { v2 as cloudinary } from 'cloudinary';
import { ConfigService } from '@nestjs/config';
import * as fs from 'fs';

export const CLOUDINARY = 'CLOUDINARY';

export const CloudinaryProvider = {
  provide: CLOUDINARY,
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => {
    const dotenvPath = require('path').resolve(process.cwd(), '.env');
    const dotenvExists = fs.existsSync(dotenvPath);
    let dotenvContent = '';
    if (dotenvExists) {
      dotenvContent = fs.readFileSync(dotenvPath, 'utf8');
    }

    console.log('DOTENV DEBUG:', {
      cwd: process.cwd(),
      dotenvPath,
      dotenvExists,
      dotenvContentSnippet: dotenvContent ? dotenvContent.split('\n').filter(l => l.includes('CLOUDINARY')).join(' | ') : 'empty'
    });

    const cloudName = configService.get<string>('CLOUDINARY_CLOUD_NAME');
    const apiKey = configService.get<string>('CLOUDINARY_API_KEY');
    const apiSecret = configService.get<string>('CLOUDINARY_API_SECRET');

    console.log('Initializing Cloudinary Provider with:', {
      cloudName,
      apiKey,
      apiSecretLength: apiSecret ? apiSecret.length : 0,
    });

    cloudinary.config({
      cloud_name: cloudName,
      api_key: apiKey,
      api_secret: apiSecret,
    });

    try {
      // Perform connection ping test to validate credentials
      const result = await cloudinary.api.ping();
      console.log('✅ Cloudinary connection check: SUCCESS!', result);
    } catch (err) {
      console.error('❌ Cloudinary connection check: FAILED! Error details:', JSON.stringify(err, null, 2) || err);
    }

    return cloudinary;
  },
};
