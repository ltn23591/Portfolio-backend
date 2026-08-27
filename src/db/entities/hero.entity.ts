import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'portfolio_hero' })
export class HeroEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: 'Software Engineer' })
    tagline: string;

    @Column({ type: 'text' })
    title: string;

    @Column({ type: 'text' })
    description: string;

    @Column({ nullable: true })
    githubUrl: string;

    @Column({ nullable: true })
    linkedinUrl: string;

    @Column({ nullable: true })
    emailUrl: string;
}
