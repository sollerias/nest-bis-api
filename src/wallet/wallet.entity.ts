import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from "typeorm";
// import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Wallet extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @Column()
  isCoinAvailable: boolean;

  @Column()
  privKey: string;

  @Column()
  pubKey: string;
}