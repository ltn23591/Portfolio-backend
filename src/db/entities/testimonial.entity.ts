import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'portfolio_testimonials' })
export class TestimonialEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    role: string; // e.g. "CTO, FinTech Core"

    @Column({ type: 'text' })
    content: string;

    @Column({ default: 5 })
    rating: number;

    @Column({ nullable: true })
    avatarUrl: string;
}
