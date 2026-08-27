import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'portfolio_experiences' })
export class ExperienceEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    role: string;

    @Column()
    company: string;

    @Column()
    period: string; // e.g. "2024 - Present"

    @Column({ type: 'simple-array' })
    description: string[]; // Bullet points

    @Column({ type: 'simple-array' })
    skills: string[]; // Tech highlights
}
