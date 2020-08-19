import { Injectable, Logger, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WalletCreateDto } from './dto/walet-create.dto';
import { WalletRepository } from './wallet.repository';
import { WalletImportDto } from './dto/wallet-import.dto';
import { WalletDeleteDto } from './dto/wallet-delete.dto';
import { WalletGetBalanceDto } from './dto/wallet-get-balance.dto';
import { MicrosService } from 'src/micros/micros.service';

@Injectable()
export class WalletService {
  private logger = new Logger('WalletService');

  constructor(
    private microsService: MicrosService,
    @InjectRepository(WalletRepository)
    private walletRepository: WalletRepository,
  ) {}

  async createWallet(walletCreateDto: WalletCreateDto): Promise<{
    isCoinAvailable: boolean,
    address: string,
  }> {
    const kek = await this.microsService.createWallet(walletCreateDto);
    this.logger.log(kek);
    return await this.walletRepository.createWallet(walletCreateDto);
  }

  async importWallet(walletImportDto: WalletImportDto): Promise<{
    isCoinAvailable: boolean,
    address: string,
  }> {
    const kek = await this.microsService.importWallet(walletImportDto);
    this.logger.log(kek);
    return await this.walletRepository.importWallet(walletImportDto);
  }

  async deleteWallet(walletDeleteDto: WalletDeleteDto): Promise<{
    isCoinAvailable: boolean,
    isRemoveSuccess: boolean,
    removedAddress: string,
  }> {
    const kek = await this.microsService.deleteWallet(walletDeleteDto);
    this.logger.log(kek);
    const { coin, addressFrom, addressTo } = walletDeleteDto;
    // TODO: for future
    // const result = await this.walletRepository.delete(addressFrom);
    // if (result.affected === 0) {
    //   throw new NotFoundException(`Task with id: ${id} not found`);
    // }

    return {
      isCoinAvailable: true,
      isRemoveSuccess: true,
      removedAddress: addressFrom
    }
  }

  async getWalletBalance(walletGetBalanceDto: WalletGetBalanceDto ): Promise<{
    isCoinAvailable: boolean,
    amount: string,
  }> {
    const kek = await this.microsService.getWalletBalance(walletGetBalanceDto);
    this.logger.log(kek);
    return {
        isCoinAvailable: true,
        amount: "100000"
      }
  }
}
