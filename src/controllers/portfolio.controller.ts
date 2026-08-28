import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { PortfolioService } from '../services/portfolio.service';
import { Hero, About, Skill, Project, Experience, Testimonial, Settings, Library } from '@prisma/client';

@Controller('portfolio')
export class PortfolioController {
    constructor(private readonly portfolioService: PortfolioService) {}

    // Settings
    @Get('settings')
    async getSettings() {
        return this.portfolioService.getSettings();
    }

    @Get('github-contributions/:username')
    async getGithubContributions(@Param('username') username: string) {
        return this.portfolioService.getGithubContributions(username);
    }

    @Post('settings/:id')
    async updateSettings(@Param('id', ParseIntPipe) id: number, @Body() data: Partial<Settings>) {
        return this.portfolioService.updateSettings(id, data);
    }

    // Hero
    @Get('hero')
    async getHero() {
        return this.portfolioService.getHero();
    }

    @Post('hero/:id')
    async updateHero(@Param('id', ParseIntPipe) id: number, @Body() data: Partial<Hero>) {
        return this.portfolioService.updateHero(id, data);
    }

    // About
    @Get('about')
    async getAbout() {
        return this.portfolioService.getAbout();
    }

    @Post('about/:id')
    async updateAbout(@Param('id', ParseIntPipe) id: number, @Body() data: Partial<About>) {
        return this.portfolioService.updateAbout(id, data);
    }

    // Skills
    @Get('skills')
    async getSkills() {
        return this.portfolioService.getSkills();
    }

    @Post('skills')
    async saveSkill(@Body() data: Partial<Skill>) {
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
    async saveProject(@Body() data: Partial<Project>) {
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
    async saveExperience(@Body() data: Partial<Experience>) {
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
    async saveTestimonial(@Body() data: Partial<Testimonial>) {
        return this.portfolioService.saveTestimonial(data);
    }

    @Delete('testimonials/:id')
    async deleteTestimonial(@Param('id', ParseIntPipe) id: number) {
        return this.portfolioService.deleteTestimonial(id);
    }

    // Libraries CRUD
    @Get('libraries')
    async getLibraries() {
        return this.portfolioService.getLibraries();
    }

    @Post('libraries/generate-ai')
    async generateAI(@Body() body: { name: string; category: string }) {
        return this.portfolioService.generateLibraryAI(body.name, body.category);
    }

    @Post('libraries')
    async saveLibrary(@Body() data: Partial<Library>) {
        return this.portfolioService.saveLibrary(data);
    }

    @Delete('libraries/:id')
    async deleteLibrary(@Param('id', ParseIntPipe) id: number) {
        return this.portfolioService.deleteLibrary(id);
    }

    // Extensions Endpoints
    @Get('extensions')
    async getExtensions() {
        return this.portfolioService.getExtensions();
    }

    @Post('extensions')
    async saveExtension(@Body() data: any) {
        return this.portfolioService.saveExtension(data);
    }

    @Delete('extensions/:id')
    async deleteExtension(@Param('id', ParseIntPipe) id: number) {
        return this.portfolioService.deleteExtension(id);
    }
}
