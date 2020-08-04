import { Module } from '@nestjs/common';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionRepository } from './transaction.repository';

// TODO: rewrite Transaction model with new Name,
// because 'Transaction' is reserved by TypeORM.
@Module({
  imports: [
    TypeOrmModule.forFeature([TransactionRepository]),
  ],
  controllers: [TransactionController],
  providers: [TransactionService]
})
export class TransactionModule {}
