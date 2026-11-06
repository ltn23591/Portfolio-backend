import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaService } from '../db/prisma.service';

@Injectable()
export class PortfolioService implements OnModuleInit {
    constructor(private readonly prisma: PrismaService) {}

    onModuleInit() {
        void this.seedDefaultsIfNeeded();
    }

    private async seedDefaultsIfNeeded() {
        try {
            // 1. Settings
            const existingSettings = await this.prisma.settings.findFirst({
                orderBy: { id: 'asc' },
            });
            const settingsData = {
                logoText: 'LE TRUNG NGHIA',
                footerText: '© 2026 Lê Trung Nghĩa. All rights reserved.',
                resumeUrl: '/CV-Le-Trung-Nghia.pdf',
                showHero: true,
                showAbout: true,
                showProjects: true,
                showExperience: true,
                showTestimonials: false,
                showContact: true,
                themeMode: 'obsidian-teal',
                contactEmail: 'ltn23591@gmail.com',
                contactPhone: '0326405864',
                contactAddress: 'Quận Bình Tân, TP. Hồ Chí Minh',
                githubUrl: 'https://github.com/ltn23591',
                linkedinUrl: 'https://linkedin.com',
                telegramUrl: 'https://t.me/example',
            };
            if (!existingSettings) {
                await this.prisma.settings.create({ data: settingsData });
            } else {
                await this.prisma.settings.update({
                    where: { id: existingSettings.id },
                    data: settingsData,
                });
            }

            // 2. Hero
            const existingHero = await this.prisma.hero.findFirst({ orderBy: { id: 'asc' } });
            const heroData = {
                tagline: 'Backend Developer',
                title: 'LÊ TRUNG NGHĨA',
                description:
                    'Sinh viên năm cuối chuyên ngành Kỹ thuật Phần mềm tại Đại học Văn Hiến (VHU) với 3 tháng kinh nghiệm thực tập thực chiến tại Công ty HiAI (Dự án ERP & E-Commerce Phú Hòa Food: phf-api & phf-ui-web). Chuyên sâu về Backend Node.js, Express, NestJS và cơ sở dữ liệu MySQL, MongoDB, PostgreSQL.',
                githubUrl: 'https://github.com/ltn23591',
                linkedinUrl: 'https://linkedin.com',
                emailUrl: 'mailto:ltn23591@gmail.com',
            };
            if (!existingHero) {
                await this.prisma.hero.create({ data: heroData });
            } else {
                await this.prisma.hero.update({ where: { id: existingHero.id }, data: heroData });
            }

            // 3. About
            const existingAbout = await this.prisma.about.findFirst({ orderBy: { id: 'asc' } });
            const aboutPayload = {
                title: 'Nền Tảng Học Vấn & Thế Mạnh Cốt Lõi',
                bio1: 'Sinh viên năm cuối chuyên ngành Kỹ thuật Phần mềm tại Đại học Văn Hiến (VHU). Có kinh nghiệm thực chiến 3 tháng tại Công ty HiAI phát triển các hệ thống ERP doanh nghiệp (phf-api & phf-ui-web: Báo cáo tồn kho SQL CTE, Kiểm kê kho lớn), hoàn thành Đồ án Tốt nghiệp Hệ sinh thái F&B SipPoint và Đồ án môn Web nâng cao Fashion Store.',
                bio2: 'Đại Học Văn Hiến (Van Hien University) | Chuyên Ngành Kỹ Thuật Phần Mềm (2022 - 2026) — GPA: 3.0/4.0',
                philosophy:
                    'Code sạch không chỉ để máy chạy, mà để đồng đội dễ dàng phát triển tiếp. Luôn chủ động nghiên cứu tài liệu kỹ thuật, áp dụng công nghệ mới và tối ưu hóa hệ thống vận hành ổn định.',
                statExp: '3 Tháng',
                statProjects: '5+ Dự án',
                statSatisfaction: '< 100ms',
                statOpenSource: '99.95% Uptime',
            };
            if (!existingAbout) {
                await this.prisma.about.create({ data: aboutPayload });
            } else {
                await this.prisma.about.update({
                    where: { id: existingAbout.id },
                    data: aboutPayload,
                });
            }

            // 4. Skills
            await this.prisma.skill.deleteMany({
                where: {
                    OR: [
                        { category: { contains: 'DevOps' } },
                        { skillName: { contains: 'PHP' } },
                    ],
                },
            });
            await this.prisma.skill.updateMany({
                where: { category: { in: ['Hệ thống Backend', 'Backend'] } },
                data: { category: 'Backend' },
            });
            await this.prisma.skill.updateMany({
                where: { category: { in: ['Tích hợp Frontend', 'Frontend'] } },
                data: { category: 'Frontend' },
            });
            await this.prisma.skill.updateMany({
                where: {
                    category: { in: ['Cơ sở dữ liệu & Caching', 'Cơ sở dữ liệu', 'Database'] },
                },
                data: { category: 'Database' },
            });
            const skillsCount = await this.prisma.skill.count();
            if (skillsCount === 0) {
                const defaultSkills = [
                    { category: 'Backend', skillName: 'Node.js' },
                    { category: 'Backend', skillName: 'Express.js' },
                    { category: 'Backend', skillName: 'NestJS' },
                    { category: 'Backend', skillName: 'TypeScript' },
                    { category: 'Backend', skillName: 'Socket.io / WebSockets' },
                    { category: 'Frontend', skillName: 'React 19' },
                    { category: 'Frontend', skillName: 'Next.js' },
                    { category: 'Frontend', skillName: 'Tailwind CSS v4' },
                    { category: 'Frontend', skillName: 'TanStack Query & Table' },
                    { category: 'Frontend', skillName: 'Zustand / Shadcn UI' },
                    { category: 'Database', skillName: 'PostgreSQL (SQL CTE)' },
                    { category: 'Database', skillName: 'MongoDB (Mongoose)' },
                    { category: 'Database', skillName: 'MySQL' },
                    { category: 'Database', skillName: 'Redis (ioredis)' },
                    { category: 'Database', skillName: 'Prisma ORM' },
                ];
                await this.prisma.skill.createMany({ data: defaultSkills });
            }

            // 5. Projects
            await this.prisma.project.deleteMany();
            const realProjects = [
                {
                    title: 'SipPoint — Smart F&B Ordering & POS Ecosystem (Graduation Project)',
                    description:
                        'Đồ án tốt nghiệp chuyên ngành Kỹ thuật Phần mềm — Nền tảng chuyển đổi số toàn diện cho chuỗi Cà phê & Trà sữa gồm 3 phân hệ (BE API, POS Portal & Web App) kết nối Realtime qua Socket.io, đối soát ngân hàng SePay IPN tự động và trợ lý AI RAG (Gemini 2.5 Flash).',
                    isBest: true,
                    highlights: [
                        'Kiến trúc RESTful API (Node.js, Express, MongoDB, Redis) đồng bộ đơn hàng DINE_IN / TAKEAWAY / DELIVERY và trạng thái sơ đồ bàn thời gian thực qua Socket.io.',
                        'Tự động hóa đối soát thanh toán chuyển khoản ngân hàng 100% qua SePay IPN Webhook, tự động kích hoạt đơn PAID và tích điểm hạng hội viên (Đồng, Bạc, Vàng, Kim Cương).',
                        'Xây dựng cổng quản trị SipPoint-Portal (React 19, TanStack Query, Shadcn UI, Recharts) quản lý biến thể thực đơn, chiến dịch khuyến mãi, vòng quay Lucky Wheel và xuất báo cáo ExcelJS.',
                        'Tích hợp AI Chatbot RAG tư vấn đồ uống thông minh với Google Gemini 2.5 Flash kèm cơ chế fallback OpenAI GPT-4o-mini.',
                    ],
                    category: 'fullstack',
                    tech: [
                        'Node.js',
                        'Express.js',
                        'MongoDB',
                        'Redis',
                        'Socket.io',
                        'React 19',
                        'TanStack Query',
                        'SePay Webhook',
                        'Gemini AI',
                    ],
                    github: 'https://github.com/ltn23591/SipPoint-BE',
                    live: 'https://github.com/ltn23591/SipPoint-Web-App',
                    images: [],
                    repos: [
                        { label: 'Backend API', url: 'https://github.com/ltn23591/SipPoint-BE' },
                        {
                            label: 'Admin Portal',
                            url: 'https://github.com/ltn23591/SipPoint-Portal',
                        },
                        {
                            label: 'Web App',
                            url: 'https://github.com/ltn23591/SipPoint-Web-App',
                        },
                    ],
                },
                {
                    title: 'Website Fashion Store — E-Commerce (Advanced Web Development Course Project)',
                    description:
                        'Đồ án môn Lập trình Web nâng cao — Xây dựng website E-Commerce thời trang với PHP và MySQL, tích hợp xác thực JWT, Cookies, Middleware, mã xác thực OTP đăng ký/quên mật khẩu và gửi email tự động qua PHPMailer.',
                    isBest: false,
                    highlights: [
                        'Phát triển các tính năng Backend cốt lõi: Quản lý sản phẩm, giỏ hàng (shopping cart) và xử lý quy trình đơn hàng bằng PHP và MySQL.',
                        'Xây dựng cơ chế xác thực & phân quyền an toàn sử dụng JWT, Cookies và Middleware bảo vệ các routes.',
                        'Tích hợp hệ thống mã xác thực OTP nâng cao bảo mật khi đăng ký tài khoản và khôi phục mật khẩu.',
                        'Tích hợp dịch vụ PHPMailer tự động gửi email xác nhận chi tiết đơn hàng và thông báo đến người dùng.',
                    ],
                    category: 'backend',
                    tech: [
                        'PHP',
                        'JavaScript',
                        'MySQL',
                        'XAMPP',
                        'TailwindCSS',
                        'PHPMailer',
                        'JWT',
                        'OTP',
                    ],
                    github: 'https://github.com/ltn23591/Fashion-Store',
                    live: 'https://github.com/ltn23591/Fashion-Store',
                    images: [],
                    repos: [
                        {
                            label: 'Source Code',
                            url: 'https://github.com/ltn23591/Fashion-Store',
                        },
                    ],
                },
                {
                    title: 'Forever — Nền Tảng Thương Mại Điện Tử Thời Trang (MERN Stack)',
                    description:
                        'Hệ thống E-Commerce thời trang toàn diện gồm giao diện mua sắm, giỏ hàng đa biến thể (Size/Màu), thanh toán trực tuyến và trang quản trị đơn hàng.',
                    isBest: false,
                    highlights: [
                        'Phát triển RESTful API chuẩn mực với Node.js, Express và MongoDB quản lý danh mục sản phẩm, tồn kho theo biến thể và vòng đời đơn hàng.',
                        'Triển khai xác thực và phân quyền người dùng/Admin bảo mật bằng JWT, tích hợp lưu trữ hình ảnh sản phẩm trên Cloudinary.',
                        'Thiết kế giao diện người dùng mượt mà với React.js & Tailwind CSS, hỗ trợ tìm kiếm, lọc đa tiêu chí và theo dõi trạng thái vận chuyển.',
                    ],
                    category: 'fullstack',
                    tech: [
                        'MongoDB',
                        'Express.js',
                        'React.js',
                        'Node.js',
                        'Tailwind CSS',
                        'JWT',
                        'Cloudinary',
                    ],
                    github: 'https://github.com/ltn23591/Forever',
                    live: 'https://github.com/ltn23591/Forever',
                    images: [],
                    repos: [
                        { label: 'Fullstack', url: 'https://github.com/ltn23591/Forever' },
                    ],
                },
            ];

            for (const proj of realProjects) {
                const { repos, ...rest } = proj;
                await this.prisma.project.create({
                    data: {
                        ...rest,
                        repos: {
                            create: repos,
                        },
                    },
                });
            }

            // 6. Work Experience
            await this.prisma.experience.deleteMany();
            const realExperiences = [
                {
                    role: 'Software Engineer Intern',
                    company:
                        'Công ty HiAI — Dự Án Hệ Thống ERP & E-Commerce Phú Hòa Food (phf-api & phf-ui-web)',
                    period: '04/2026 - 07/2026',
                    achievements: [
                        'Hoàn thành 20+ Jira Tasks & PRs (PHF-765..972)',
                        'Tối ưu SQL CTE Báo cáo Tồn kho',
                        'Xử lý tải lớn Kiểm kê kho (Stock-Count)',
                    ],
                    description: [
                        '[Backend - PHF-765 & PHF-769]: Thiết kế API Báo cáo Xuất-Nhập-Tồn (Inventory Report) và tối ưu câu truy vấn SQL CTE tính lũy kế tồn đầu kỳ (Opening Stock) chính xác theo khoảng thời gian.',
                        '[Backend - PHF-932, PHF-869, PHF-966]: Nâng giới hạn payload & transaction timeout cho nghiệp vụ Kiểm kê kho dữ liệu lớn; lưu ảnh minh chứng khi tồn thực tế bằng 0 và chống trùng kho khi tạo phiếu xuất nội bộ.',
                        '[Backend - PHF-963, PHF-922, PHF-924]: Ánh xạ thuế suất (taxRate) vào đơn mua hàng (PO); chuẩn hóa URL ảnh sản phẩm (toPublicStorageUrl) và cập nhật bộ đếm số lượng Role active.',
                        '[Frontend - PHF-965, PHF-934, PHF-967, PHF-923]: Đồng bộ danh sách PO sau khi kiểm nhập kho; kiểm soát chế độ chỉnh sửa phiếu chuyển kho (Warehouse Transfer) và tích hợp tìm kiếm ẩn trên TanStack Table.',
                    ],
                    skills: [
                        'Node.js',
                        'TypeScript',
                        'PostgreSQL (SQL CTE)',
                        'React / Next.js',
                        'TanStack Table',
                        'RESTful API',
                        'Git Flow',
                    ],
                },
            ];

            for (const exp of realExperiences) {
                await this.prisma.experience.create({ data: exp });
            }
        } catch (err) {
            console.error('Background seed warning:', err);
        }
    }

    // Settings
    async getSettings() {
        const settings = await this.prisma.settings.findMany({
            orderBy: { id: 'asc' },
        });
        return settings[0] || null;
    }

    async updateSettings(_id: number, data: any) {
        const cleanData = {
            ...(data.logoText !== undefined && { logoText: String(data.logoText) }),
            ...(data.footerText !== undefined && { footerText: String(data.footerText) }),
            ...(data.resumeUrl !== undefined && { resumeUrl: String(data.resumeUrl || '#') }),
            ...(data.showHero !== undefined && { showHero: Boolean(data.showHero) }),
            ...(data.showAbout !== undefined && { showAbout: Boolean(data.showAbout) }),
            ...(data.showProjects !== undefined && { showProjects: Boolean(data.showProjects) }),
            ...(data.showExperience !== undefined && {
                showExperience: Boolean(data.showExperience),
            }),
            ...(data.showTestimonials !== undefined && {
                showTestimonials: Boolean(data.showTestimonials),
            }),
            ...(data.showContact !== undefined && { showContact: Boolean(data.showContact) }),
            ...(data.themeMode !== undefined && { themeMode: String(data.themeMode) }),
            ...(data.contactEmail !== undefined && { contactEmail: String(data.contactEmail) }),
            ...(data.contactPhone !== undefined && { contactPhone: String(data.contactPhone) }),
            ...(data.contactAddress !== undefined && {
                contactAddress: String(data.contactAddress),
            }),
            ...(data.githubUrl !== undefined && { githubUrl: String(data.githubUrl) }),
            ...(data.linkedinUrl !== undefined && { linkedinUrl: String(data.linkedinUrl) }),
            ...(data.telegramUrl !== undefined && { telegramUrl: String(data.telegramUrl) }),
        };

        const allSettings = await this.prisma.settings.findMany({
            orderBy: { id: 'asc' },
        });

        if (allSettings.length === 0) {
            return this.prisma.settings.create({ data: cleanData as any });
        }

        const primaryId = allSettings[0].id;
        if (allSettings.length > 1) {
            const extraIds = allSettings.slice(1).map((s) => s.id);
            await this.prisma.settings.deleteMany({
                where: { id: { in: extraIds } },
            });
        }

        return this.prisma.settings.update({
            where: { id: primaryId },
            data: cleanData,
        });
    }

    // Hero Methods
    async getHero() {
        const heroes = await this.prisma.hero.findMany({
            orderBy: { id: 'asc' },
        });
        return heroes[0] || null;
    }

    async updateHero(_id: number, data: any) {
        const cleanData = {
            ...(data.tagline !== undefined && { tagline: String(data.tagline) }),
            ...(data.title !== undefined && { title: String(data.title) }),
            ...(data.description !== undefined && { description: String(data.description) }),
            ...(data.githubUrl !== undefined && { githubUrl: String(data.githubUrl) }),
            ...(data.linkedinUrl !== undefined && { linkedinUrl: String(data.linkedinUrl) }),
            ...(data.emailUrl !== undefined && { emailUrl: String(data.emailUrl) }),
            ...(data.avatarUrl !== undefined && { avatarUrl: String(data.avatarUrl) }),
        };

        const allHeroes = await this.prisma.hero.findMany({
            orderBy: { id: 'asc' },
        });

        if (allHeroes.length === 0) {
            return this.prisma.hero.create({ data: cleanData as any });
        }

        const primaryId = allHeroes[0].id;
        if (allHeroes.length > 1) {
            const extraIds = allHeroes.slice(1).map((h) => h.id);
            await this.prisma.hero.deleteMany({ where: { id: { in: extraIds } } });
        }

        return this.prisma.hero.update({
            where: { id: primaryId },
            data: cleanData,
        });
    }

    // About Methods
    async getAbout() {
        const abouts = await this.prisma.about.findMany({
            orderBy: { id: 'asc' },
        });
        return abouts[0] || null;
    }

    async updateAbout(_id: number, data: any) {
        const cleanData = {
            ...(data.title !== undefined && { title: String(data.title) }),
            ...(data.bio1 !== undefined && { bio1: String(data.bio1) }),
            ...(data.bio2 !== undefined && { bio2: String(data.bio2 || '') }),
            ...(data.philosophy !== undefined && { philosophy: String(data.philosophy || '') }),
            ...(data.statExp !== undefined && { statExp: String(data.statExp) }),
            ...(data.statProjects !== undefined && { statProjects: String(data.statProjects) }),
            ...(data.statSatisfaction !== undefined && {
                statSatisfaction: String(data.statSatisfaction),
            }),
            ...(data.statOpenSource !== undefined && {
                statOpenSource: String(data.statOpenSource),
            }),
        };

        const allAbouts = await this.prisma.about.findMany({
            orderBy: { id: 'asc' },
        });

        if (allAbouts.length === 0) {
            return this.prisma.about.create({ data: cleanData as any });
        }

        const primaryId = allAbouts[0].id;
        if (allAbouts.length > 1) {
            const extraIds = allAbouts.slice(1).map((a) => a.id);
            await this.prisma.about.deleteMany({ where: { id: { in: extraIds } } });
        }

        return this.prisma.about.update({
            where: { id: primaryId },
            data: cleanData,
        });
    }

    // Skills
    async getSkills() {
        return this.prisma.skill.findMany({
            orderBy: { id: 'asc' },
        });
    }

    async saveSkill(data: any) {
        const cleanData = {
            category: String(data.category || 'Hệ thống Backend'),
            skillName: String(data.skillName || ''),
        };
        if (data.id) {
            return this.prisma.skill.update({
                where: { id: Number(data.id) },
                data: cleanData,
            });
        }
        return this.prisma.skill.create({
            data: cleanData,
        });
    }

    async deleteSkill(id: number) {
        return this.prisma.skill.delete({
            where: { id },
        });
    }

    // Extensions CRUD
    async getExtensions() {
        return this.prisma.extension.findMany({
            orderBy: { id: 'asc' },
        });
    }

    async saveExtension(data: any) {
        const { id, ...rest } = data;
        if (id) {
            return this.prisma.extension.update({
                where: { id: Number(id) },
                data: rest,
            });
        }
        return this.prisma.extension.create({
            data: rest,
        });
    }

    async deleteExtension(id: number) {
        return this.prisma.extension.delete({
            where: { id },
        });
    }

    // Projects CRUD
    async getProjects() {
        return this.prisma.project.findMany({
            orderBy: [{ isBest: 'desc' }, { id: 'asc' }],
            include: { repos: true },
        });
    }

    async saveProject(data: any) {
        const reposData = Array.isArray(data.repos) ? data.repos : [];
        const isBest = Boolean(data.isBest);

        // If this project is marked as Best Project, unmark others first
        if (isBest) {
            await this.prisma.project.updateMany({
                where: { isBest: true },
                data: { isBest: false },
            });
        }

        const cleanProjectData = {
            title: String(data.title || ''),
            description: String(data.description || ''),
            isBest,
            highlights: Array.isArray(data.highlights)
                ? data.highlights.map(String).filter((s: string) => s.trim().length > 0)
                : [],
            category: String(data.category || 'fullstack'),
            tech: Array.isArray(data.tech) ? data.tech.map(String) : [],
            github: data.github ? String(data.github) : '',
            live: data.live ? String(data.live) : '',
            images: Array.isArray(data.images) ? data.images.map(String) : [],
        };

        if (data.id) {
            return this.prisma.project.update({
                where: { id: Number(data.id) },
                data: {
                    ...cleanProjectData,
                    repos: {
                        deleteMany: {},
                        create: reposData.map((r: any) => ({
                            label: String(r.label || 'Code'),
                            url: String(r.url || ''),
                        })),
                    },
                },
                include: { repos: true },
            });
        }
        return this.prisma.project.create({
            data: {
                ...cleanProjectData,
                repos: {
                    create: reposData.map((r: any) => ({
                        label: String(r.label || 'Code'),
                        url: String(r.url || ''),
                    })),
                },
            },
            include: { repos: true },
        });
    }

    async deleteProject(id: number) {
        return this.prisma.project.delete({
            where: { id },
        });
    }

    // Experience CRUD
    async getExperiences() {
        return this.prisma.experience.findMany({
            orderBy: { id: 'asc' },
        });
    }

    async saveExperience(data: any) {
        const cleanExpData = {
            role: String(data.role || ''),
            company: String(data.company || ''),
            period: String(data.period || ''),
            achievements: Array.isArray(data.achievements)
                ? data.achievements.map(String).filter((a: string) => a.trim().length > 0)
                : [],
            description: Array.isArray(data.description)
                ? data.description.map(String)
                : [String(data.description || '')],
            skills: Array.isArray(data.skills) ? data.skills.map(String) : [],
        };

        if (data.id) {
            return this.prisma.experience.update({
                where: { id: Number(data.id) },
                data: cleanExpData,
            });
        }
        return this.prisma.experience.create({
            data: cleanExpData,
        });
    }

    async deleteExperience(id: number) {
        return this.prisma.experience.delete({
            where: { id },
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
                where: { id: Number(id) },
                data: rest,
            });
        }
        return this.prisma.testimonial.create({
            data: rest,
        });
    }

    async deleteTestimonial(id: number) {
        return this.prisma.testimonial.delete({
            where: { id },
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
                where: { id: Number(id) },
                data: rest,
            });
        }
        return this.prisma.library.create({
            data: rest,
        });
    }

    async deleteLibrary(id: number) {
        return this.prisma.library.delete({
            where: { id },
        });
    }

    async generateLibraryAI(name: string, _category: string) {
        return {
            filename: `${name.toLowerCase()}.ts`,
            install: `npm install ${name.toLowerCase()}`,
            codeTs: `// ${name}`,
            codeJs: `// ${name}`,
            desc: `Tài liệu ${name}`,
        };
    }

    async getGithubContributions(_username: string) {
        return { years: [], contributions: [] };
    }
}
