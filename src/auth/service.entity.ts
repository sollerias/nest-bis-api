import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ServiceEntity {

    @PrimaryGeneratedColumn()
    id_service: number;

    @Column({ type: "text" })
    service_name: string;

    @Column({ type: "text" })
    service_pass_hash: string;

    @Column({ type: "text" })
    refresh_token: string;

    @Column({ type: "int" })
    expires_in: number;
}