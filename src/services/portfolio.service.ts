import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaService } from '../db/prisma.service';
import { defaultLibraries } from '../db/seeds/libraries.seed';

@Injectable()
export class PortfolioService implements OnModuleInit {
    constructor(
        private readonly prisma: PrismaService
    ) {}

    // Auto seed database if empty
    async onModuleInit() {
        // Seed Settings
        const settingsCount = await this.prisma.settings.count();
        if (settingsCount === 0) {
            await this.prisma.settings.create({
                data: {
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
                    githubUrl: "https://github.com/ltn23591",
                    linkedinUrl: "https://linkedin.com",
                    telegramUrl: "https://t.me/example"
                }
            });
        }

        // Seed Hero
        const heroCount = await this.prisma.hero.count();
        if (heroCount === 0) {
            await this.prisma.hero.create({
                data: {
                    tagline: "Kỹ sư Phần mềm & Chuyên gia Backend",
                    title: "Xây dựng giải pháp hệ thống hiệu năng cao",
                    description: "Xin chào, tôi là Lê Trung Nghĩa. Tôi chuyên thiết kế kiến trúc hệ thống backend chịu tải lớn, xây dựng API tối ưu và phát triển các sản phẩm fullstack hiện đại bằng React, Node.js, Laravel và TypeScript.",
                    githubUrl: "https://github.com/ltn23591",
                    linkedinUrl: "https://linkedin.com",
                    emailUrl: "mailto:letrungnghia.dev@gmail.com"
                }
            });
        }

        // Seed About
        const aboutCount = await this.prisma.about.count();
        if (aboutCount === 0) {
            await this.prisma.about.create({
                data: {
                    title: "Kỹ Sư Backend NestJS & Node.js",
                    bio1: "Tôi là một nhà phát triển phần mềm chuyên nghiệp tập trung vào việc lập trình các ứng dụng web tối ưu và xây dựng hệ thống microservices backend có độ tin cậy cao.",
                    bio2: "Tôi luôn tìm kiếm các giải pháp tự động hóa thông minh, thiết kế CSDL chuẩn hóa tối đa và tối ưu hóa tốc độ phản hồi API.",
                    philosophy: "Hệ thống tốt là hệ thống chạy ổn định và dễ bảo trì.",
                    statExp: "4+",
                    statProjects: "35+",
                    statSatisfaction: "99%",
                    statOpenSource: "15+"
                }
            });
        }

        // Force re-seed skills to Neon database
        await this.prisma.skill.deleteMany();
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
        await this.prisma.skill.createMany({ data: defaultSkills });

        // Seed Projects
        const projectsCount = await this.prisma.project.count();
        if (projectsCount === 0) {
            const defaultProjects = [
                {
                    title: "DevFlow - Diễn đàn Cộng đồng Lập trình viên",
                    description: "Một mạng xã hội dành cho nhà phát triển với hệ thống gợi ý, tính điểm uy tín, tìm kiếm toàn cục và chat thời gian thực. Thiết kế các cụm serverless và bộ đệm Redis tối ưu.",
                    category: "fullstack",
                    tech: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Redis"],
                    github: "https://github.com",
                    live: "https://example.com",
                    images: [
                        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
                        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80",
                        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
                    ]
                },
                {
                    title: "TaskPulse - API Điều phối Tác vụ Hệ thống",
                    description: "Một bộ lên lịch tác vụ và hàng đợi xử lý nền hiệu năng cao xử lý hơn 50.000 tác vụ mỗi ngày. Phát triển giải pháp khóa cơ sở dữ liệu và xử lý bất đồng bộ bằng Laravel và Redis.",
                    category: "backend",
                    tech: ["Laravel", "PHP", "PostgreSQL", "Redis", "Docker"],
                    github: "https://github.com",
                    live: "https://example.com",
                    images: [
                        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
                        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
                        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
                    ]
                },
                {
                    title: "RestroPay - Cổng Thanh toán Đăng ký Stripe",
                    description: "Dịch vụ thanh toán gói thành viên tự động và tạo hóa đơn tự động tích hợp Stripe API cho nền tảng đa doanh nghiệp.",
                    category: "backend",
                    tech: ["Node.js", "TypeScript", "Express", "Stripe API", "PostgreSQL", "Prisma"],
                    github: "https://github.com",
                    live: "https://example.com",
                    images: [
                        "https://images.unsplash.com/photo-1563013544-824ae1d704d3?auto=format&fit=crop&w=800&q=80",
                        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
                        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80"
                    ]
                }
            ];
            
            for (const project of defaultProjects) {
                await this.prisma.project.create({ data: project });
            }
        }

        // Seed Experience
        const experienceCount = await this.prisma.experience.count();
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
            await this.prisma.experience.createMany({ data: defaultExperiences });
        }

        // Seed Testimonials
        const testimonialsCount = await this.prisma.testimonial.count();
        if (testimonialsCount === 0) {
            const defaultTestimonials = [
                {
                    name: "Sarah Jenkins",
                    role: "Giám đốc Công nghệ (CTO), FinTech Core",
                    content: "Lê Trung Nghĩa đã bàn giao hạ tầng API thanh toán cốt lõi của chúng tôi với sự chính xác tuyệt đối. Việc triển khai lớp phòng tránh thanh toán trùng lặp của anh ấy đã giải quyết hoàn toàn bài toán của hệ thống.",
                    rating: 5,
                    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&h=800&q=80"
                },
                {
                    name: "David Miller",
                    role: "Trưởng phòng Sản phẩm, Nexus Labs",
                    content: "Nghĩa là chuyên gia hàng đầu khi nói về thiết kế cơ sở dữ liệu phức tạp. Anh ấy đã di chuyển hơn 10 triệu bản ghi từ MongoDB sang PostgreSQL không một vết lỗi. Hiệu suất các dashboard của chúng tôi đã cải thiện rõ rệt.",
                    rating: 5,
                    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&h=800&q=80"
                }
            ];
            await this.prisma.testimonial.createMany({ data: defaultTestimonials });
        }

        // Force re-seed libraries to Neon database
        await this.prisma.library.deleteMany();
        await this.prisma.library.createMany({ data: defaultLibraries });

        // Force re-seed extensions to Neon database
        await this.prisma.extension.deleteMany();
        const defaultExtensions = [
            {
                name: "Gemini Code Assist",
                extensionId: "google.geminicodeassist",
                desc: "AI-powered code assistant that helps you write, explain, and debug code directly inside VS Code.",
                category: "AI",
                installUrl: "https://marketplace.visualstudio.com/items?itemName=Google.geminicodeassist"
            },
            {
                name: "NestJS Files",
                extensionId: "abhijoybasak.nestjs-files",
                desc: "Easily generate NestJS modules, services, controllers, and gateways with boilerplate code right from the context menu.",
                category: "NestJS",
                installUrl: "https://marketplace.visualstudio.com/items?itemName=abhijoybasak.nestjs-files"
            },
            {
                name: "NestJS Snippets",
                extensionId: "ashinzekene.nestjs",
                desc: "Provides useful NestJS code snippets and blueprints to write controllers, services, and modules in seconds.",
                category: "NestJS",
                installUrl: "https://marketplace.visualstudio.com/items?itemName=ashinzekene.nestjs"
            },
            {
                name: "Prettier - Code formatter",
                extensionId: "esbenp.prettier-vscode",
                desc: "An opinionated code formatter that enforces a consistent style by parsing your code and re-printing it with its own rules.",
                category: "Formatter",
                installUrl: "https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"
            },
            {
                name: "ESLint",
                extensionId: "dbaeumer.vscode-eslint",
                desc: "Integrates ESLint into VS Code to analyze code patterns, find code smells, and enforce guidelines.",
                category: "Linter",
                installUrl: "https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"
            },
            {
                name: "GitLens — Git supercharged",
                extensionId: "eamodio.gitlens",
                desc: "Supercharge the Git capabilities built into VS Code, helping you visualize code authorship at a glance.",
                category: "Git",
                installUrl: "https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens"
            },
            {
                name: "Git History",
                extensionId: "donjayamanne.githistory",
                desc: "Beautifully visualizes Git commit history, branches, and file diffs inside VS Code.",
                category: "Git",
                installUrl: "https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory"
            },
            {
                name: "Thunder Client",
                extensionId: "rangav.vscode-thunder-client",
                desc: "A clean, modern, and quick REST API client built directly into VS Code to test your backend endpoints.",
                category: "API Client",
                installUrl: "https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client"
            },
            {
                name: "REST Client",
                extensionId: "humao.rest-client",
                desc: "Allows you to send HTTP request and view response directly in VS Code editor using simple text syntax.",
                category: "API Client",
                installUrl: "https://marketplace.visualstudio.com/items?itemName=humao.rest-client"
            },
            {
                name: "Prisma",
                extensionId: "prisma.prisma",
                desc: "Adds formatting, autocompletion, linting and syntax highlighting for Prisma Schema files (.prisma).",
                category: "Database",
                installUrl: "https://marketplace.visualstudio.com/items?itemName=prisma.prisma"
            },
            {
                name: "MongoDB for VS Code",
                extensionId: "mongodb.mongodb-vscode",
                desc: "Connect to MongoDB databases, explore data collections, and run database queries inside your IDE.",
                category: "Database",
                installUrl: "https://marketplace.visualstudio.com/items?itemName=mongodb.mongodb-vscode"
            },
            {
                name: "Tailwind CSS IntelliSense",
                extensionId: "bradlc.vscode-tailwindcss",
                desc: "Intelligent Tailwind CSS tooling for VS Code that provides autocomplete, linting, and hover previews.",
                category: "CSS",
                installUrl: "https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss"
            },
            {
                name: "Better Comments",
                extensionId: "aaron-bond.better-comments",
                desc: "Helps you create more human-friendly comments in your code by categorizing annotations into alerts, queries, and TODOs.",
                category: "Comments",
                installUrl: "https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments"
            },
            {
                name: "CodeSnap",
                extensionId: "adpyke.codesnap",
                desc: "Take beautiful screenshots of your source code quickly with customizable layouts and window frames.",
                category: "Other",
                installUrl: "https://marketplace.visualstudio.com/items?itemName=adpyke.codesnap"
            },
            {
                name: "Dracula Official",
                extensionId: "dracula-theme.theme-dracula",
                desc: "The famous dark, vibrant and premium color theme designed for professional developers.",
                category: "Other",
                installUrl: "https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula"
            },
            {
                name: "Ayu",
                extensionId: "teabyii.ayu",
                desc: "A clean, warm and sleek UI theme designed to minimize eye strain during long-night coding sessions.",
                category: "Other",
                installUrl: "https://marketplace.visualstudio.com/items?itemName=teabyii.ayu"
            },
            {
                name: "Material Icon Theme",
                extensionId: "pkief.material-icon-theme",
                desc: "Brings modern, neat and recognizable Material Design icons to your VS Code file sidebar list.",
                category: "Other",
                installUrl: "https://marketplace.visualstudio.com/items?itemName=pkief.material-icon-theme"
            },
            {
                name: "Live Server",
                extensionId: "ritwickdey.liveserver",
                desc: "Launches a local development server with live reload feature for static and dynamic web pages.",
                category: "Other",
                installUrl: "https://marketplace.visualstudio.com/items?itemName=ritwickdey.liveserver"
            },
            {
                name: "Dotenv",
                extensionId: "mikestead.dotenv",
                desc: "Adds syntax highlighting, formatting and autocompletion for environment variable configuration files (.env).",
                category: "Other",
                installUrl: "https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv"
            },
            {
                name: "Path IntelliSense",
                extensionId: "christian-kohler.path-intellisense",
                desc: "Visual Studio Code plugin that autocompletes file names and directory paths inside import statements.",
                category: "Other",
                installUrl: "https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense"
            },
            {
                name: "NPM IntelliSense",
                extensionId: "christian-kohler.npm-intellisense",
                desc: "Automatically resolves and autocompletes npm node_modules packages inside import declarations.",
                category: "Other",
                installUrl: "https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense"
            },
            {
                name: "Turbo Console Log",
                extensionId: "chakrounanas.turbo-console-log",
                desc: "Automates the process of writing meaningful console log messages with variable states, context, and file details.",
                category: "Other",
                installUrl: "https://marketplace.visualstudio.com/items?itemName=chakrounanas.turbo-console-log"
            },
            {
                name: "Simple React Snippets",
                extensionId: "burkeholland.simple-react-snippets",
                desc: "Essential React component templates and hooks shortcuts to write fast components.",
                category: "Other",
                installUrl: "https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets"
            },
            {
                name: "ES7+ React/Redux snippets",
                extensionId: "dsznajder.es7-react-js-snippets",
                desc: "JavaScript and React snippets with ES7+ syntax highlighting and auto-imports.",
                category: "Other",
                installUrl: "https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets"
            },
            {
                name: "Docker",
                extensionId: "docker.docker",
                desc: "Makes it easy to build, manage, debug and deploy containerized applications inside VS Code.",
                category: "Other",
                installUrl: "https://marketplace.visualstudio.com/items?itemName=docker.docker"
            },
            {
                name: "Laravel Extra Intellisense",
                extensionId: "amiralizadeh9480.laravel-extra-intellisense",
                desc: "Provides autocomplete for routes, views, configs, translations, and models in Laravel applications.",
                category: "Other",
                installUrl: "https://marketplace.visualstudio.com/items?itemName=amiralizadeh9480.laravel-extra-intellisense"
            },
            {
                name: "Laravel Goto View",
                extensionId: "codingyu.laravel-goto-view",
                desc: "Allows quick navigation to view templates directly from controller actions in Laravel.",
                category: "Other",
                installUrl: "https://marketplace.visualstudio.com/items?itemName=codingyu.laravel-goto-view"
            },
            {
                name: "Laravel Blade Snippets",
                extensionId: "onecentlin.laravel-blade",
                desc: "Blade syntax highlighting, formatting, and quick snippets for Laravel templating engine.",
                category: "Other",
                installUrl: "https://marketplace.visualstudio.com/items?itemName=onecentlin.laravel-blade"
            },
            {
                name: "Laravel Artisan",
                extensionId: "ryannaddy.laravel-artisan",
                desc: "Execute Laravel Artisan commands directly from VS Code interface without opening terminals.",
                category: "Other",
                installUrl: "https://marketplace.visualstudio.com/items?itemName=ryannaddy.laravel-artisan"
            },
            {
                name: "Pretty TypeScript Errors",
                extensionId: "yoavbls.pretty-ts-errors",
                desc: "Make TypeScript errors easy to read with visual highlights, clean formatting, and human-friendly explanations.",
                category: "Other",
                installUrl: "https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors"
            }
        ];
        await this.prisma.extension.createMany({ data: defaultExtensions });
    }

    // Settings
    async getSettings() {
        const settings = await this.prisma.settings.findMany();
        return settings[0] || null;
    }

    async updateSettings(id: number, data: any) {
        // Strip id from update payload
        const { id: _, ...rest } = data;
        await this.prisma.settings.update({
            where: { id },
            data: rest
        });
        return this.getSettings();
    }

    // Hero Methods
    async getHero() {
        const heroes = await this.prisma.hero.findMany();
        return heroes[0] || null;
    }

    async updateHero(id: number, data: any) {
        const { id: _, ...rest } = data;
        await this.prisma.hero.update({
            where: { id },
            data: rest
        });
        return this.getHero();
    }

    // About Methods
    async getAbout() {
        const abouts = await this.prisma.about.findMany();
        return abouts[0] || null;
    }

    async updateAbout(id: number, data: any) {
        const { id: _, ...rest } = data;
        await this.prisma.about.update({
            where: { id },
            data: rest
        });
        return this.getAbout();
    }

    // Skills
    async getSkills() {
        return this.prisma.skill.findMany();
    }

    async saveSkill(data: any) {
        const { id, ...rest } = data;
        if (id) {
            return this.prisma.skill.update({
                where: { id: parseInt(id) },
                data: rest
            });
        }
        return this.prisma.skill.create({
            data: rest
        });
    }

    async deleteSkill(id: number) {
        return this.prisma.skill.delete({
            where: { id }
        });
    }

    // Extensions CRUD
    async getExtensions() {
        return this.prisma.extension.findMany({
            orderBy: { id: 'asc' }
        });
    }

    async saveExtension(data: any) {
        const { id, ...rest } = data;
        if (id) {
            return this.prisma.extension.update({
                where: { id: Number(id) },
                data: rest
            });
        }
        return this.prisma.extension.create({
            data: rest
        });
    }

    async deleteExtension(id: number) {
        return this.prisma.extension.delete({
            where: { id }
        });
    }

    // Projects CRUD
    async getProjects() {
        return this.prisma.project.findMany({
            include: { repos: true }
        });
    }

    async saveProject(data: any) {
        const { id, repos, ...rest } = data;
        const reposData = repos ? (Array.isArray(repos) ? repos : []) : [];

        if (id) {
            // Drop old relations and insert new ones on update
            return this.prisma.project.update({
                where: { id: parseInt(id) },
                data: {
                    ...rest,
                    repos: {
                        deleteMany: {},
                        create: reposData.map(r => ({
                            label: r.label,
                            url: r.url
                        }))
                    }
                },
                include: { repos: true }
            });
        }
        return this.prisma.project.create({
            data: {
                ...rest,
                repos: {
                    create: reposData.map(r => ({
                        label: r.label,
                        url: r.url
                    }))
                }
            },
            include: { repos: true }
        });
    }

    async deleteProject(id: number) {
        return this.prisma.project.delete({
            where: { id }
        });
    }

    // Experience CRUD
    async getExperiences() {
        return this.prisma.experience.findMany();
    }

    async saveExperience(data: any) {
        const { id, ...rest } = data;
        if (id) {
            return this.prisma.experience.update({
                where: { id: parseInt(id) },
                data: rest
            });
        }
        return this.prisma.experience.create({
            data: rest
        });
    }

    async deleteExperience(id: number) {
        return this.prisma.experience.delete({
            where: { id }
        });
    }

    // Testimonials CRUD
    async getTestimonials() {
        return this.prisma.testimonial.findMany();
    }

    async saveTestimonial(data: any) {
        const { id, ...rest } = data;
        if (id) {
            return this.prisma.testimonial.update({
                where: { id: parseInt(id) },
                data: rest
            });
        }
        return this.prisma.testimonial.create({
            data: rest
        });
    }

    async deleteTestimonial(id: number) {
        return this.prisma.testimonial.delete({
            where: { id }
        });
    }

    // Libraries CRUD
    async getLibraries() {
        return this.prisma.library.findMany();
    }

    async saveLibrary(data: any) {
        const { id, ...rest } = data;
        if (id) {
            return this.prisma.library.update({
                where: { id: parseInt(id) },
                data: rest
            });
        }
        return this.prisma.library.create({
            data: rest
        });
    }

    async deleteLibrary(id: number) {
        return this.prisma.library.delete({
            where: { id }
        });
    }

    async generateLibraryAI(name: string, category: string) {
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            throw new Error('Chưa cấu hình GEMINI_API_KEY trong .env');
        }

        const prompt = `Bạn là trợ lý AI chuyên gia lập trình. Hãy viết tài liệu và code mẫu cho thư viện "${name}" (thuộc nhóm "${category}").
Trả về kết quả ở định dạng JSON duy nhất, không bọc trong thẻ markdown \`\`\`json.
Cấu trúc JSON yêu cầu chính xác như sau:
{
  "filename": "Tên file tương ứng (ví dụ: auth.ts — Authentication)",
  "install": "Lệnh cài đặt npm (ví dụ: npm install jsonwebtoken)",
  "codeTs": "Đoạn code mẫu viết bằng TypeScript hoặc code cấu hình chuẩn (giữ nguyên thụt dòng, không bọc thẻ markdown)",
  "codeJs": "Đoạn code mẫu tương đương viết bằng JavaScript hoặc code cấu hình chuẩn (giữ nguyên thụt dòng, không bọc thẻ markdown)",
  "desc": "Tài liệu tiếng Việt chi tiết với định dạng markdown:
## 🌟 Khái niệm
Giải thích ngắn gọn thư viện là gì.
## 🛠️ Cách hoạt động
- Bước 1
- Bước 2
## 📝 Giải thích Code mẫu
- Giải thích hàm/cấu hình 1
- Giải thích hàm/cấu hình 2"
}
Lưu ý: Không trả về thêm bất kỳ văn bản nào ngoài chuỗi JSON hợp lệ.`;

        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Gemini API Error: ${errorText}`);
        }

        const resData = await response.json();
        let rawText = resData.candidates?.[0]?.content?.parts?.[0]?.text || '';
        
        rawText = rawText.replace(/^```json\s*/i, '').replace(/```\s*$/, '').trim();

        try {
            return JSON.parse(rawText);
        } catch (e) {
            return {
                filename: `${name.toLowerCase().replace(/\s+/g, '')}.ts — Integration`,
                install: `npm install ${name.toLowerCase().replace(/\s+/g, '-')}`,
                codeTs: `// TS code for ${name}`,
                codeJs: `// JS code for ${name}`,
                desc: rawText || `Tài liệu về ${name}`
            };
        }
    }

    async getGithubContributions(username: string) {
        try {
            const currentYear = new Date().getFullYear();
            const years = [currentYear, currentYear - 1, currentYear - 2, currentYear - 3, currentYear - 4];
            
            const allContributions: any[] = [];
            const yearSummaries: any[] = [];

            for (const yr of years) {
                const url = `https://github.com/users/${username}/contributions?from=${yr}-01-01&to=${yr}-12-31`;
                const res = await fetch(url, {
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
                    }
                });
                if (!res.ok) continue;
                const html = await res.text();

                const totalMatch = html.match(/([\d,]+)\s+contributions/i);
                const yearTotal = totalMatch ? parseInt(totalMatch[1].replace(/,/g, '')) : 0;

                const tdRegex = /data-date="([^"]+)"[^>]*data-level="([^"]+)"/g;
                let match;
                let yearCountSum = 0;

                while ((match = tdRegex.exec(html)) !== null) {
                    const date = match[1];
                    const level = parseInt(match[2]);
                    const count = level === 0 ? 0 : level === 1 ? 1 : level === 2 ? 3 : level === 3 ? 6 : 10;
                    yearCountSum += count;

                    allContributions.push({
                        date,
                        count,
                        intensity: level,
                        color: level === 0 ? '#161b22' : level === 1 ? '#0e4429' : level === 2 ? '#006d32' : level === 3 ? '#26a641' : '#39d353'
                    });
                }

                yearSummaries.push({
                    year: yr.toString(),
                    total: yearTotal || yearCountSum
                });
            }

            return {
                years: yearSummaries,
                contributions: allContributions
            };
        } catch (err) {
            return { error: 'Failed to fetch contributions' };
        }
    }
}
