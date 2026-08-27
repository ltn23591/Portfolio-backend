import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactController } from './controllers/contact.controller';
import { ContactService } from './services/contact.service';
import { PortfolioController } from './controllers/portfolio.controller';
import { PortfolioService } from './services/portfolio.service';

import { Contact } from './db/entities/contact.entity';
import { HeroEntity } from './db/entities/hero.entity';
import { AboutEntity } from './db/entities/about.entity';
import { SkillEntity } from './db/entities/skill.entity';
import { ProjectEntity } from './db/entities/project.entity';
import { ExperienceEntity } from './db/entities/experience.entity';
import { TestimonialEntity } from './db/entities/testimonial.entity';
import { SettingsEntity } from './db/entities/settings.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST', 'localhost'),
        port: configService.get<number>('DB_PORT', 5432),
        username: configService.get<string>('DB_USERNAME', 'postgres'),
        password: configService.get<string>('DB_PASSWORD', '123456'),
        database: configService.get<string>('DB_DATABASE', 'portfolio'),
        entities: [
          Contact, HeroEntity, AboutEntity, SkillEntity, 
          ProjectEntity, ExperienceEntity, TestimonialEntity, SettingsEntity
        ],
        synchronize: true, // Creates tables in dev database
        ssl: configService.get<string>('DB_SSL', 'false') === 'true' ? { rejectUnauthorized: false } : false,
      }),
    }),
    TypeOrmModule.forFeature([
      Contact, HeroEntity, AboutEntity, SkillEntity, 
      ProjectEntity, ExperienceEntity, TestimonialEntity, SettingsEntity
    ]),
  ],
  controllers: [ContactController, PortfolioController],
  providers: [ContactService, PortfolioService],
})
export class AppModule {}
