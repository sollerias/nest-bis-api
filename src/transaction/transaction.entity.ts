import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Transaction extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  addressFrom: string;

  @Column()
  addressTo: string;

  @Column()
  txHash: string;

  @Column()
  txHex: string;

  @Column()
  amount: string;

  @Column()
  isApproved: boolean;

  @Column()
  timeApproved: Date;

  @Column()
  errors: string;
}

