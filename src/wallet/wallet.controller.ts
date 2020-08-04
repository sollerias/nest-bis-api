import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { WalletCreateDto } from './dto/walet-create.dto';

@Controller('wallet')
export class WalletController {
  constructor(private walletService: WalletService) {}

  @Post('/create')
  createWallet(@Body(ValidationPipe) walletCreateDto: WalletCreateDto): Promise<{
    isCoinAvailable: boolean,
    address: string,
  }> {
    return this.walletService.createWallet(walletCreateDto);
  }
}
