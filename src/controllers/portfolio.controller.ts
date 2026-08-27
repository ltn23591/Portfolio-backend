import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { PortfolioService } from '../services/portfolio.service';
import { HeroEntity } from '../db/entities/hero.entity';
import { AboutEntity } from '../db/entities/about.entity';
import { SkillEntity } from '../db/entities/skill.entity';
import { ProjectEntity } from '../db/entities/project.entity';
import { ExperienceEntity } from '../db/entities/experience.entity';
import { TestimonialEntity } from '../db/entities/testimonial.entity';
import { SettingsEntity } from '../db/entities/settings.entity';

@Controller('portfolio')
export class PortfolioController {
    constructor(private readonly portfolioService: PortfolioService) {}

    // Settings
    @Get('settings')
    async getSettings() {
        return this.portfolioService.getSettings();
    }

    @Post('settings/:id')
    async updateSettings(@Param('id', ParseIntPipe) id: number, @Body() data: Partial<SettingsEntity>) {
        return this.portfolioService.updateSettings(id, data);
    }

    // Hero
    @Get('hero')
    async getHero() {
        return this.portfolioService.getHero();
    }

    @Post('hero/:id')
    async updateHero(@Param('id', ParseIntPipe) id: number, @Body() data: Partial<HeroEntity>) {
        return this.portfolioService.updateHero(id, data);
    }

    // About
    @Get('about')
    async getAbout() {
        return this.portfolioService.getAbout();
    }

    @Post('about/:id')
    async updateAbout(@Param('id', ParseIntPipe) id: number, @Body() data: Partial<AboutEntity>) {
        return this.portfolioService.updateAbout(id, data);
    }

    // Skills
    @Get('skills')
    async getSkills() {
        return this.portfolioService.getSkills();
    }

    @Post('skills')
    async saveSkill(@Body() data: Partial<SkillEntity>) {
        return this.portfolioService.saveSkill(data);
    }

    @Delete('skills/:id')
    async deleteSkill(@Param('id', ParseIntPipe) id: number) {
        return this.portfolioService.deleteSkill(id);
    }

    // Projects CRUD
    @Get('projects')
    async getProjects() {
        return this.portfolioService.getProjects();
    }

    @Post('projects')
    async saveProject(@Body() data: Partial<ProjectEntity>) {
        return this.portfolioService.saveProject(data);
    }

    @Delete('projects/:id')
    async deleteProject(@Param('id', ParseIntPipe) id: number) {
        return this.portfolioService.deleteProject(id);
    }

    // Experience CRUD
    @Get('experience')
    async getExperiences() {
        return this.portfolioService.getExperiences();
    }

    @Post('experience')
    async saveExperience(@Body() data: Partial<ExperienceEntity>) {
        return this.portfolioService.saveExperience(data);
    }

    @Delete('experience/:id')
    async deleteExperience(@Param('id', ParseIntPipe) id: number) {
        return this.portfolioService.deleteExperience(id);
    }

    // Testimonials CRUD
    @Get('testimonials')
    async getTestimonials() {
        return this.portfolioService.getTestimonials();
    }

    @Post('testimonials')
    async saveTestimonial(@Body() data: Partial<TestimonialEntity>) {
        return this.portfolioService.saveTestimonial(data);
    }

    @Delete('testimonials/:id')
    async deleteTestimonial(@Param('id', ParseIntPipe) id: number) {
        return this.portfolioService.deleteTestimonial(id);
    }
}
