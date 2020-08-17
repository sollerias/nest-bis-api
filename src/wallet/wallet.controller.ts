import { Controller, Post, Body, ValidationPipe, Delete, Get, Query, UseGuards, Logger } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { WalletService } from './wallet.service';
import { WalletCreateDto } from './dto/walet-create.dto';
import { WalletImportDto } from './dto/wallet-import.dto';
import { WalletDeleteDto } from './dto/wallet-delete.dto';
import { WalletGetBalanceDto } from './dto/wallet-get-balance.dto';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

@Controller('wallet')
@UseGuards(AuthGuard('jwt'))
export class WalletController {
  private logger = new Logger('MicroService');
  private client: ClientProxy;

  constructor(private walletService: WalletService) {
    this.client = ClientProxyFactory.create({
      transport: Transport.NATS,
      options: {
        url: 'nats://localhost:14222',
      },
    });
    this.client.connect();
  }

  @Post('/create')
  async createWallet(@Body(ValidationPipe) walletCreateDto: WalletCreateDto): Promise<{
    isCoinAvailable: boolean,
    address: string,
  }> {
    const result = await this.client.send('create_wallet1', walletCreateDto);
    this.logger.log(result);
    return await this.walletService.createWallet(walletCreateDto);
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
