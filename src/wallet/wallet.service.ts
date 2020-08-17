import { Injectable, Logger, Inject } from '@nestjs/common';
import { WalletCreateDto } from './dto/walet-create.dto';
import { WalletRepository } from './wallet.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { WalletImportDto } from './dto/wallet-import.dto';
import { WalletDeleteDto } from './dto/wallet-delete.dto';
import { WalletGetBalanceDto } from './dto/wallet-get-balance.dto';
import { MicrosService } from 'src/micros/micros.service';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { resolve } from 'path';

@Injectable()
export class WalletService {
  private logger = new Logger('WalletService');

  constructor(
    private microsService: MicrosService,
    @InjectRepository(WalletRepository)
    private walletRepository: WalletRepository,
    @Inject('WALLET')
    private walletMicroService: ClientProxy,
  ) {}

  async createWallet(walletCreateDto: WalletCreateDto): Promise<{
    isCoinAvailable: boolean,
    address: string,
  }> {
    const kek = await this.microsService.getWalletCredentials(walletCreateDto);
    console.log(kek);
    // this.walletMicroService
    //   .send({cmd: 'create_wallet1'},{
    //     username: 'Kek Vorobek',
    //     message: 'be with you',
    //   })
    //   .subscribe({
    //     next: users => {
    //       console.log('Wallet Service return: ', users);
    //       return users;
    //     },
    //     error: error => {
    //       console.log(error);
    //     }
    // });
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

  async getWalletBalance(walletGetBalanceDto: WalletGetBalanceDto ): Promise<{
    isCoinAvailable: boolean,
    amount: string,
  }> {
  return {
      isCoinAvailable: true,
      amount: "100000"
    }
  }
}
