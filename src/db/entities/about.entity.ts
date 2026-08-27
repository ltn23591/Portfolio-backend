import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'portfolio_about' })
export class AboutEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: 'Who is Le Trung Nghia?' })
    title: string;

    @Column({ type: 'text' })
    bio1: string;

    @Column({ type: 'text', nullable: true })
    bio2: string;

    @Column({ type: 'text', nullable: true })
    philosophy: string;

    @Column({ default: '4+' })
    statExp: string;

    @Column({ default: '35+' })
    statProjects: string;

    @Column({ default: '99%' })
    statSatisfaction: string;

    @Column({ default: '15+' })
    statOpenSource: string;
}
