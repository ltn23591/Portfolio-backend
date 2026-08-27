import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'portfolio_skills' })
export class SkillEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    category: string; // e.g. "Backend Core", "Frontend Integration"

    @Column()
    skillName: string; // e.g. "Node.js", "React.js"
}
