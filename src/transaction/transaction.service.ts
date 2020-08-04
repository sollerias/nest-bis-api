import { Injectable } from '@nestjs/common';
import { TransactionRepository } from './transaction.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { TransactionCreateDto } from './dto/transaction-create.dto';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(TransactionRepository)
    private transactionRepository: TransactionRepository,
  ){}

  async createTransaction(transactionCreateDto: TransactionCreateDto): Promise<{
    isCoinAvailable: boolean,
    isCoinSent: boolean,
    addressTo: string,
    amountCoins: string,
    fee: string,
    txHash: string,
  }> {
    return await this.transactionRepository.createTransaction(transactionCreateDto);
  }
}
