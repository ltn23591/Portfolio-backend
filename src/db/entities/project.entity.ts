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

    @Column({ nullable: true, default: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80' })
    imageUrl: string;
}
