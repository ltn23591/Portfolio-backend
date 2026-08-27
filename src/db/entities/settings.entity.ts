import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'portfolio_settings' })
export class SettingsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: 'Nghĩa.dev' })
    logoText: string;

    @Column({ default: '© 2026 Lê Trung Nghĩa. All rights reserved.' })
    footerText: string;

    @Column({ nullable: true, default: '#' })
    resumeUrl: string;

    @Column({ default: true })
    showHero: boolean;

    @Column({ default: true })
    showAbout: boolean;

    @Column({ default: true })
    showProjects: boolean;

    @Column({ default: true })
    showExperience: boolean;

    @Column({ default: true })
    showTestimonials: boolean;

    @Column({ default: true })
    showContact: boolean;

    @Column({ default: 'obsidian-teal' })
    themeMode: string;

    // Contact details columns
    @Column({ default: 'letrungnghia.dev@gmail.com' })
    contactEmail: string;

    @Column({ default: '+84 987 654 321' })
    contactPhone: string;

    @Column({ default: 'TP. Hồ Chí Minh, Việt Nam' })
    contactAddress: string;

    @Column({ default: 'https://github.com' })
    githubUrl: string;

    @Column({ default: 'https://linkedin.com' })
    linkedinUrl: string;

    @Column({ default: 'https://t.me/example' })
    telegramUrl: string;
}
