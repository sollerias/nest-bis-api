import { Injectable } from '@nestjs/common';
import { Transaction } from './transaction.model';

@Injectable()
export class TransactionsService {
  private transactions: Transaction[] = [];
}
