import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HeroEntity } from '../db/entities/hero.entity';
import { AboutEntity } from '../db/entities/about.entity';
import { SkillEntity } from '../db/entities/skill.entity';
import { ProjectEntity } from '../db/entities/project.entity';
import { ExperienceEntity } from '../db/entities/experience.entity';
import { TestimonialEntity } from '../db/entities/testimonial.entity';
import { SettingsEntity } from '../db/entities/settings.entity';

@Injectable()
export class PortfolioService implements OnModuleInit {
    constructor(
        @InjectRepository(HeroEntity) private readonly heroRepo: Repository<HeroEntity>,
        @InjectRepository(AboutEntity) private readonly aboutRepo: Repository<AboutEntity>,
        @InjectRepository(SkillEntity) private readonly skillRepo: Repository<SkillEntity>,
        @InjectRepository(ProjectEntity) private readonly projectRepo: Repository<ProjectEntity>,
        @InjectRepository(ExperienceEntity) private readonly experienceRepo: Repository<ExperienceEntity>,
        @InjectRepository(TestimonialEntity) private readonly testimonialRepo: Repository<TestimonialEntity>,
        @InjectRepository(SettingsEntity) private readonly settingsRepo: Repository<SettingsEntity>,
    ) {}

    // Auto seed database if empty
    async onModuleInit() {
        // Seed Settings
        const settingsCount = await this.settingsRepo.count();
        if (settingsCount === 0) {
            await this.settingsRepo.save({
                logoText: "Nghĩa.dev",
                footerText: "© 2026 Lê Trung Nghĩa. Bảo lưu mọi quyền.",
                resumeUrl: "#",
                showHero: true,
                showAbout: true,
                showProjects: true,
                showExperience: true,
                showTestimonials: true,
                showContact: true,
                themeMode: "obsidian-teal",
                contactEmail: "letrungnghia.dev@gmail.com",
                contactPhone: "+84 987 654 321",
                contactAddress: "TP. Hồ Chí Minh, Việt Nam",
                githubUrl: "https://github.com",
                linkedinUrl: "https://linkedin.com",
                telegramUrl: "https://t.me/example"
            });
        }

        // Seed Hero
        const heroCount = await this.heroRepo.count();
        if (heroCount === 0) {
            await this.heroRepo.save({
                tagline: "Kỹ sư Phần mềm & Chuyên gia Backend",
                title: "Xây dựng giải pháp hệ thống hiệu năng cao",
                description: "Xin chào, tôi là Lê Trung Nghĩa. Tôi chuyên thiết kế kiến trúc hệ thống backend chịu tải lớn, xây dựng API tối ưu và phát triển các sản phẩm fullstack hiện đại bằng React, Node.js, Laravel và TypeScript.",
                githubUrl: "https://github.com",
                linkedinUrl: "https://linkedin.com",
                emailUrl: "contact@example.com"
            });
        }

        // Seed About
        const aboutCount = await this.aboutRepo.count();
        if (aboutCount === 0) {
            await this.aboutRepo.save({
                title: "Lê Trung Nghĩa là ai?",
                bio1: "Tôi là một kỹ sư phần mềm tập trung vào phát triển các kiến trúc máy chủ mạnh mẽ và hiệu năng cao. Với nền tảng vững chắc về các framework JavaScript hiện đại và hệ sinh thái backend Laravel, tôi thích giải quyết các bài toán kiến trúc phức tạp như tối ưu hóa database, hệ thống xác thực bảo mật và các kết nối socket thời gian thực.",
                bio2: "Qua nhiều năm làm việc, tôi đã có cơ hội xây dựng các hệ thống production thực tế tối ưu hóa tốc độ phản hồi cực nhanh, tích hợp các cổng thanh toán quốc tế và thiết lập quy trình tự động hóa CI/CD.",
                philosophy: "Viết code sạch và dễ đọc không chỉ là tiêu chuẩn, đó là lời cam kết cho sự phát triển lâu dài. Tôi luôn xây dựng các hệ thống backend vận hành trơn tru ngay cả dưới lượng tải lớn.",
                statExp: "4+ Năm",
                statProjects: "35+",
                statSatisfaction: "99%",
                statOpenSource: "15+"
            });
        }

        // Seed Skills
        const skillsCount = await this.skillRepo.count();
        if (skillsCount === 0) {
            const defaultSkills = [
                { category: 'Hệ thống Backend', skillName: 'Node.js' },
                { category: 'Hệ thống Backend', skillName: 'Express' },
                { category: 'Hệ thống Backend', skillName: 'NestJS' },
                { category: 'Hệ thống Backend', skillName: 'Laravel (PHP)' },
                { category: 'Hệ thống Backend', skillName: 'TypeScript' },
                { category: 'Tích hợp Frontend', skillName: 'React.js' },
                { category: 'Tích hợp Frontend', skillName: 'Tailwind CSS' },
                { category: 'Tích hợp Frontend', skillName: 'Next.js' },
                { category: 'Cơ sở dữ liệu & Caching', skillName: 'PostgreSQL' },
                { category: 'Cơ sở dữ liệu & Caching', skillName: 'MongoDB' },
                { category: 'Cơ sở dữ liệu & Caching', skillName: 'Redis' },
                { category: 'DevOps & Công cụ', skillName: 'Docker' },
                { category: 'DevOps & Công cụ', skillName: 'Git/GitHub' },
                { category: 'DevOps & Công cụ', skillName: 'AWS' }
            ];
            await this.skillRepo.save(defaultSkills);
        }

        // Seed Projects
        const projectsCount = await this.projectRepo.count();
        if (projectsCount === 0) {
            const defaultProjects = [
                {
                    title: "DevFlow - Diễn đàn Cộng đồng Lập trình viên",
                    description: "Một mạng xã hội dành cho nhà phát triển với hệ thống gợi ý, tính điểm uy tín, tìm kiếm toàn cục và chat thời gian thực. Thiết kế các cụm serverless và bộ đệm Redis tối ưu.",
                    category: "fullstack",
                    tech: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Redis"],
                    github: "https://github.com",
                    live: "https://example.com",
                    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
                },
                {
                    title: "TaskPulse - API Điều phối Tác vụ Hệ thống",
                    description: "Một bộ lên lịch tác vụ và hàng đợi xử lý nền hiệu năng cao xử lý hơn 50.000 tác vụ mỗi ngày. Phát triển giải pháp khóa cơ sở dữ liệu và xử lý bất đồng bộ bằng Laravel và Redis.",
                    category: "backend",
                    tech: ["Laravel", "PHP", "PostgreSQL", "Redis", "Docker"],
                    github: "https://github.com",
                    live: "https://example.com",
                    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
                },
                {
                    title: "RestroPay - Cổng Thanh toán Đăng ký Stripe",
                    description: "Dịch vụ thanh toán gói thành viên tự động và tạo hóa đơn tự động tích hợp Stripe API cho nền tảng đa doanh nghiệp.",
                    category: "backend",
                    tech: ["Node.js", "TypeScript", "Express", "Stripe API", "PostgreSQL", "Prisma"],
                    github: "https://github.com",
                    live: "https://example.com",
                    imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1d704d3?auto=format&fit=crop&w=800&q=80"
                }
            ];
            await this.projectRepo.save(defaultProjects);
        }

        // Seed Experience
        const experienceCount = await this.experienceRepo.count();
        if (experienceCount === 0) {
            const defaultExperiences = [
                {
                    role: "Kỹ sư Backend Cấp cao",
                    company: "TechVibe Solutions",
                    period: "2024 - Hiện tại",
                    description: [
                        "Dẫn dắt đội ngũ 4 lập trình viên tái cấu trúc hệ thống Laravel cũ sang kiến trúc microservices NestJS/PostgreSQL, tăng tốc độ xử lý giao dịch lên 40%.",
                        "Xây dựng và bảo trì các luồng thanh toán cốt lõi tích hợp cổng Stripe và Paypal.",
                        "Tối ưu hóa chỉ mục (indexing) cơ sở dữ liệu và cấu hình cụm bộ nhớ đệm Redis giúp giảm độ trễ phản hồi API trung bình xuống dưới 120ms."
                    ],
                    skills: ["NestJS", "TypeScript", "PostgreSQL", "Redis", "Stripe API", "AWS"]
                },
                {
                    role: "Nhà phát triển Phần mềm",
                    company: "Nexus Software Hub",
                    period: "2022 - 2024",
                    description: [
                        "Thiết kế và phát triển các cổng API xử lý dữ liệu lớn bằng Laravel và MySQL cho các công cụ quản trị khách hàng CRM doanh nghiệp.",
                        "Xây dựng giao diện quản trị Admin tối ưu bằng React.js và Tailwind CSS đi kèm cơ chế phân quyền bảo mật bằng JWT.",
                        "Thiết lập quy trình kiểm thử tự động CI/CD với GitHub Actions và đóng gói container ứng dụng bằng Docker."
                    ],
                    skills: ["Laravel", "PHP", "React.js", "MySQL", "Docker", "CI/CD"]
                }
            ];
            await this.experienceRepo.save(defaultExperiences);
        }

        // Seed Testimonials
        const testimonialsCount = await this.testimonialRepo.count();
        if (testimonialsCount === 0) {
            const defaultTestimonials = [
                {
                    name: "Sarah Jenkins",
                    role: "Giám đốc Công nghệ (CTO), FinTech Core",
                    content: "Lê Trung Nghĩa đã bàn giao hạ tầng API thanh toán cốt lõi của chúng tôi với sự chính xác tuyệt đối. Việc triển khai lớp phòng tránh thanh toán trùng lặp của anh ấy đã giải quyết hoàn toàn bài toán của hệ thống.",
                    rating: 5,
                    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80"
                },
                {
                    name: "David Miller",
                    role: "Trưởng phòng Sản phẩm, Nexus Labs",
                    content: "Nghĩa là chuyên gia hàng đầu khi nói về thiết kế cơ sở dữ liệu phức tạp. Anh ấy đã di chuyển hơn 10 triệu bản ghi từ MongoDB sang PostgreSQL không một vết lỗi. Hiệu suất các dashboard của chúng tôi đã cải thiện rõ rệt.",
                    rating: 5,
                    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
                }
            ];
            await this.testimonialRepo.save(defaultTestimonials);
        }
    }

    // Settings
    async getSettings() {
        const settings = await this.settingsRepo.find();
        return settings[0] || null;
    }

    async updateSettings(id: number, data: Partial<SettingsEntity>) {
        await this.settingsRepo.update(id, data);
        return this.getSettings();
    }

    // Hero Methods
    async getHero() {
        const heroes = await this.heroRepo.find();
        return heroes[0] || null;
    }

    async updateHero(id: number, data: Partial<HeroEntity>) {
        await this.heroRepo.update(id, data);
        return this.getHero();
    }

    // About Methods
    async getAbout() {
        const abouts = await this.aboutRepo.find();
        return abouts[0] || null;
    }

    async updateAbout(id: number, data: Partial<AboutEntity>) {
        await this.aboutRepo.update(id, data);
        return this.getAbout();
    }

    // Skills
    async getSkills() {
        return this.skillRepo.find();
    }

    async saveSkill(data: Partial<SkillEntity>) {
        return this.skillRepo.save(data);
    }

    async deleteSkill(id: number) {
        return this.skillRepo.delete(id);
    }

    // Projects CRUD
    async getProjects() {
        return this.projectRepo.find();
    }

    async saveProject(data: Partial<ProjectEntity>) {
        return this.projectRepo.save(data);
    }

    async deleteProject(id: number) {
        return this.projectRepo.delete(id);
    }

    // Experience CRUD
    async getExperiences() {
        return this.experienceRepo.find();
    }

    async saveExperience(data: Partial<ExperienceEntity>) {
        return this.experienceRepo.save(data);
    }

    async deleteExperience(id: number) {
        return this.experienceRepo.delete(id);
    }

    // Testimonials CRUD
    async getTestimonials() {
        return this.testimonialRepo.find();
    }

    async saveTestimonial(data: Partial<TestimonialEntity>) {
        return this.testimonialRepo.save(data);
    }

    async deleteTestimonial(id: number) {
        return this.testimonialRepo.delete(id);
    }
}
