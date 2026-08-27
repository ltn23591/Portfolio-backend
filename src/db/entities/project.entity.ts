import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'portfolio_projects' })
export class ProjectEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({ type: 'text' })
    description: string;

    @Column()
    category: string; // e.g. "fullstack", "backend", "frontend"

    @Column({ type: 'simple-array' })
    tech: string[];

    @Column({ nullable: true })
    github: string;

    @Column({ nullable: true })
    live: string;

    @Column({ type: 'simple-array', nullable: true })
    images: string[];
}
