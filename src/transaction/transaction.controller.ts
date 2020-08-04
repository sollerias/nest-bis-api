import { Controller, ValidationPipe, Body, Post } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionCreateDto } from './dto/transaction-create.dto';

@Controller('transaction')
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
}
