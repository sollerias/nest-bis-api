import { Controller, Post, Body, ValidationPipe, Delete, Get, Query } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { WalletService } from './wallet.service';
import { WalletCreateDto } from './dto/walet-create.dto';
import { WalletImportDto } from './dto/wallet-import.dto';
import { WalletDeleteDto } from './dto/wallet-delete.dto';
import { WalletGetBalanceDto } from './dto/wallet-get-balance.dto';

@ApiTags('wallet')
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

  @Post('/import')
  importWallet(@Body(ValidationPipe) walletImportDto: WalletImportDto): Promise<{
    isCoinAvailable: boolean,
    address: string,
  }> {
    return this.walletService.importWallet(walletImportDto);
  }

  @Delete('/delete')
  deleteWallet(@Body(ValidationPipe) walletDeleteDto: WalletDeleteDto): Promise<{
    isCoinAvailable: boolean,
    isRemoveSuccess: boolean,
    removedAddress: string,
  }> {
    return this.walletService.deleteWallet(walletDeleteDto);
  }

  @Get('/balance')
  getWalletBalance(@Query(ValidationPipe) walletGetBalanceDto: WalletGetBalanceDto):Promise<{
    isCoinAvailable: boolean,
    amount: string,
  }> {
    return this.walletService.getWalletBalance(walletGetBalanceDto);
  }
}
