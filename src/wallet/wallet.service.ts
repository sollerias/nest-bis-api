import { Injectable } from '@nestjs/common';
import { WalletCreateDto } from './dto/walet-create.dto';
import { WalletRepository } from './wallet.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { WalletImportDto } from './dto/wallet-import.dto';
import { WalletDeleteDto } from './dto/wallet-delete.dto';

@Injectable()
export class WalletService {
  constructor(
    @InjectRepository(WalletRepository)
    private walletRepository: WalletRepository,
  ) { }

  async createWallet(walletCreateDto: WalletCreateDto): Promise<{
    isCoinAvailable: boolean,
    address: string,
  }> {
    return await this.walletRepository.createWallet(walletCreateDto);
  }

  async importWallet(walletImportDto: WalletImportDto): Promise<{
    isCoinAvailable: boolean,
    address: string,
  }> {
    return await this.walletRepository.importWallet(walletImportDto);
  }

  async deleteWallet(walletDeleteDto: WalletDeleteDto): Promise<{
    isCoinAvailable: boolean,
    isRemoveSuccess: boolean,
    removedAddress: string,
  }> {
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
}
