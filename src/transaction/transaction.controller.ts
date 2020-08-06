import { Controller, ValidationPipe, Body, Post, Get, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TransactionService } from './transaction.service';
import { TransactionCreateDto } from './dto/transaction-create.dto';
import { TransactionGetHistoryDto } from './dto/transaction-get-history.dto';

@Controller('transaction')
@UseGuards(AuthGuard('jwt'))
export class TransactionController {
  constructor(private transactionService: TransactionService){}

  @Post('/send_coin')
  createWallet(@Body(ValidationPipe) transactionCreateDto: TransactionCreateDto): Promise<{
    isCoinAvailable: boolean,
    isCoinSent: boolean,
    addressTo: string,
    amountCoins: string,
    fee: string,
    txHash: string,
  }> {
    return this.transactionService.createTransaction(transactionCreateDto);
  }

  @Get('/get_transaction_history')
  getWalletBalance(@Query(ValidationPipe) transactionGetHistoryDto: TransactionGetHistoryDto): Promise<{
    total_count: number,
    count: number,
    page_number: number,
    page_total: number,
    limit: number,
    txs: any;
  }> {
    return this.transactionService.getTransactionHistory(transactionGetHistoryDto);
  }
}
