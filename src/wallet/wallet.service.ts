import { Injectable } from '@nestjs/common';
import { WalletCreateDto } from './dto/walet-create.dto';
import { WalletRepository } from './wallet.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class WalletService {
  constructor(
    @InjectRepository(WalletRepository)
    private walletRepository: WalletRepository,
  ){}

  async createWallet(walletCreateDto: WalletCreateDto): Promise<{
    isCoinAvailable: boolean,
    address: string,
  }> {
    return await this.walletRepository.createWallet(walletCreateDto);
  }
}
