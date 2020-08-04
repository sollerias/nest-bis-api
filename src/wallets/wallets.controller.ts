import { Controller, Get, Post, Body, Delete, Query } from '@nestjs/common';
import { Wallet } from './dto/wallet.model';
import { WalletsService } from './wallets.service';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { ImportWalletDto } from './dto/import-wallet.dto';
import { DeleteWalletDto } from './dto/delete-wallet.dto';
import { GetWalletBalanceDto } from './dto/get-wallet-balance.dto';

@Controller('wallets')
export class WalletsController {
  constructor(private walletsService: WalletsService) {}

  @Get()
  getWallets(): Wallet[] {
    return this.walletsService.getAllWallets();
  }

  @Post('/create')
  createWallet(@Body() createWalletDto: CreateWalletDto): Wallet {
    return this.walletsService.createWallet(createWalletDto);
  }

  @Post('/import')
  importWallet(@Body() importWalletDto: ImportWalletDto): Wallet {
    return this.walletsService.importWallet(importWalletDto);
  }

  @Delete()
  deleteWallet(@Body() deleteWalletDto: DeleteWalletDto): void{
    this.walletsService.deleteWallet(deleteWalletDto);
  }

  @Get('/balance')
  getWalletBalance(@Query() getWalletBalanceDto: GetWalletBalanceDto ): Wallet {
    return this.walletsService.getWalletBallance(getWalletBalanceDto);
  }
}
