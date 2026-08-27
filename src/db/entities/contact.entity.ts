import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity({ name: 'contacts' })
export class Contact {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    subject: string;

    @Column({ type: 'text' })
    message: string;

    @CreateDateColumn({ name: 'timestamp', type: 'timestamp with time zone' })
    timestamp: Date;
}
