import { Injectable, Logger, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { WalletCreateDto } from 'src/wallet/dto/walet-create.dto';
import { WalletImportDto } from 'src/wallet/dto/wallet-import.dto';
import { WalletDeleteDto } from 'src/wallet/dto/wallet-delete.dto';
import { WalletGetBalanceDto } from 'src/wallet/dto/wallet-get-balance.dto';

@Injectable()
export class MicrosService {
  private logger = new Logger('MicroService');

  constructor(
    @Inject('WALLET')
    private walletMicroService: ClientProxy,
  ) {}

  /**
   * getWalletCredentials() - create wallet from coin microservice
   * @param walletCreateDto 
   */
  async createWallet(walletCreateDto: WalletCreateDto): Promise<any> {
    const { coin } = walletCreateDto;
    return new Promise ((resolve, reject) => {
      this.walletMicroService
      .send({ cmd: `wallet.create.${coin}` }, walletCreateDto)
      .subscribe({
        next: wallet => {
          console.log('Wallet Service return: ', wallet);

          return resolve(wallet);
        },
        error: error => {
          console.log(error);

          return reject(new HttpException('Forbidden', HttpStatus.FORBIDDEN));
        }
      });
    });
  }

  /**
   * importWallet() - import wallet
   * @param walletImportDto 
   */
  async importWallet(walletImportDto: WalletImportDto): Promise<any> {
    return new Promise ((resolve, reject) => {
      const { coin } = walletImportDto;
      this.walletMicroService
      .send({ cmd: `wallet.import.${coin}` }, walletImportDto)
      .subscribe({
        next: wallet => {
          console.log('Wallet Service return: ', wallet);

          return resolve(wallet);
        },
        error: error => {
          console.log(error);

          return reject(new HttpException('Forbidden', HttpStatus.FORBIDDEN));
        }
      });
    });
  }

  /**
   * deleteWallet() - delete wallet
   * @param walletDeleteDto
   */
  async deleteWallet(walletDeleteDto: WalletDeleteDto): Promise<any> {
    return new Promise ((resolve, reject) => {
      const { coin } = walletDeleteDto;
      this.walletMicroService
      .send({ cmd: `wallet.delete.${coin}` }, walletDeleteDto)
      .subscribe({
        next: wallet => {
          console.log('Wallet Service return: ', wallet);

          return resolve(wallet);
        },
        error: error => {
          console.log(error);

          return reject(new HttpException('Forbidden', HttpStatus.FORBIDDEN));
        }
      });
    });
  }

  /**
   * getWalletBalance() - delete wallet
   * @param walletGetBalanceDto
   */
  async getWalletBalance(walletGetBalanceDto: WalletGetBalanceDto): Promise<any> {
    return new Promise ((resolve, reject) => {
      const { coin } = walletGetBalanceDto;
      this.walletMicroService
      .send({ cmd: `wallet.getballance.${coin}` }, walletGetBalanceDto)
      .subscribe({
        next: wallet => {
          console.log('Wallet Service return: ', wallet);

          return resolve(wallet);
        },
        error: error => {
          console.log(error);

          return reject(new HttpException('Forbidden', HttpStatus.FORBIDDEN));
        }
      });
    });
  }
}
