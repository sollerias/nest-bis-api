import { Injectable, Logger } from '@nestjs/common';
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

  /**
   * createWallet() - send wallet data to securestorage microservice,
   * receive wallet address and save it to DB.
   * @param walletCreateDto
   */
  async createWallet(walletCreateDto: WalletCreateDto): Promise<{
    isCoinAvailable: boolean,
    address: string,
  }> {
    const microserviceWalletAddress = await this.microsService.createWallet(walletCreateDto);
    this.logger.log(microserviceWalletAddress);

    return await this.walletRepository.createWallet(microserviceWalletAddress.address);
  }

  /**
   * importWallet() - send wallet data to securestorage microservice,
   * receive wallet address and save it to DB.
   * @param walletImportDto
   */
  async importWallet(walletImportDto: WalletImportDto): Promise<{
    isCoinAvailable: boolean,
    address: string,
  }> {
    const microserviceWalletAddress = await this.microsService.importWallet(walletImportDto);
    this.logger.log(microserviceWalletAddress);

    return await this.walletRepository.importWallet(microserviceWalletAddress.address);
  }

  /**
   * deleteWallet() - send wallet data to securestorage microservice,
   * receive notify, that wallet deleted and delete it from DB.
   * @param walletDeleteDto
   */
  async deleteWallet(walletDeleteDto: WalletDeleteDto): Promise<{
    isCoinAvailable: boolean,
    isRemoveSuccess: boolean,
    removedAddress: string,
  }> {
    const deletedWalletInfo = await this.microsService.deleteWallet(walletDeleteDto);
    this.logger.log(deletedWalletInfo);
    const { removedAddress } = deletedWalletInfo;
    // TODO: for future
    // const result = await this.walletRepository.delete(addressFrom);
    // if (result.affected === 0) {
    //   throw new NotFoundException(`Task with id: ${id} not found`);
    // }

    return {
      isCoinAvailable: true,
      isRemoveSuccess: true,
      removedAddress
    }
  }

  async getWalletBalance(walletGetBalanceDto: WalletGetBalanceDto ): Promise<{
    isCoinAvailable: boolean,
    amount: string,
  }> {
    const getBalanceInfo = await this.microsService.getWalletBalance(walletGetBalanceDto);
    this.logger.log(getBalanceInfo);
    const { isCoinAvailable, amount } = getBalanceInfo;

    return {
        isCoinAvailable,
        amount,
      }
  }
}
