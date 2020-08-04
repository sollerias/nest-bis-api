import { Injectable } from '@nestjs/common';
import { TransactionRepository } from './transaction.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { TransactionCreateDto } from './dto/transaction-create.dto';
import { TransactionGetHistoryDto } from './dto/transaction-get-history.dto';

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

  async getTransactionHistory(transactionGetHistoryDto: TransactionGetHistoryDto): Promise<{
    total_count: number,
    count: number,
    page_number: number,
    page_total: number,
    limit: number,
    txs: any;
  }> {
    const { coin, address, page, limit } = transactionGetHistoryDto;
    
    return {
      total_count: 2,
      count: 2,
      page_number: page,
      page_total: limit + 2,
      limit: limit,
      txs: [{
          success: true,
          txhash: "D79E289DB00EC5C542A2881B2DF95D7BDBBC6883680B9307E64D7B73A1466C95",
          gas_wanted: "200000",
          gas_used: "39765",
          timestamp: "2020-07-09T10:10:42Z",
          recipient: `${coin}1tiutbhuwqw27r4z0xkg6kr7x7vu6c4v9v94n`,
          amount: "200000",
        },
        {
          success: true,
          txhash: "FB29D1D3EE88AC8CA1F957736234A8592457A8A137F77FF80E3C5E7566814850",
          gas_wanted: "200000",
          gas_used: "8733",
          timestamp: "2020-07-09T13:01:00Z",
          recipient: `${coin}2tiutbhuwqw27r4z0xkg6kr7x7vu6c4v9v94n`,
          amount: "50000",
        }
      ]
  };
  }
}
