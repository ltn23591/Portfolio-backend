import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ContactController } from './controllers/contact.controller';
import { ContactService } from './services/contact.service';
import { PortfolioController } from './controllers/portfolio.controller';
import { PortfolioService } from './services/portfolio.service';
import { PrismaService } from './db/prisma.service';
import { PortfolioGateway } from './gateways/portfolio.gateway';

import { UploadController } from './controllers/upload.controller';
import { CloudinaryProvider } from './config/cloudinary.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
  ],
  controllers: [ContactController, PortfolioController, UploadController],
  providers: [ContactService, PortfolioService, PrismaService, CloudinaryProvider, PortfolioGateway],
})
export class AppModule {}
