import { Injectable} from '@nestjs/common';
import { v1 as uuid} from 'uuid';
import { Wallet } from './dto/wallet.model';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { ImportWalletDto } from './dto/import-wallet.dto';
import { DeleteWalletDto } from './dto/delete-wallet.dto';
import { GetWalletBalanceDto } from './dto/get-wallet-balance.dto';


@Injectable()
export class WalletsService {
  private wallets: Wallet[] = [];

  getAllWallets(): Wallet[] {
    return this.wallets;
  }

  createWallet(createWalletDto: CreateWalletDto): Wallet {
    const { coin } = createWalletDto;
    const wallet: Wallet = {
      id: uuid(),
      address: uuid(),
      pubKey: 'hs43gf09tifvjmi56tmg',
      coinId: 1,
      serviceId: uuid(),
    };

    this.wallets.push(wallet);

    return wallet;
  }

  importWallet(importWalletDto: ImportWalletDto): Wallet {
    const { coin, privKey } = importWalletDto;

    const wallet: Wallet = {
      id: uuid(),
      address: uuid(),
      pubKey: 'hs43gf09tifvjmi56tmg',
      coinId: 1,
      serviceId: uuid(),
    }

    this.wallets.push(wallet);

    return wallet;
  }

  deleteWallet(deleteWalletDto: DeleteWalletDto): void {
    const { coin, addressFrom, addressTo } = deleteWalletDto;
    this.wallets = this.wallets.filter(wallet => wallet.address !== addressFrom);
  }

  getWalletBallance(getWalletBalanceDto: GetWalletBalanceDto): any {
    const { coin, address } = getWalletBalanceDto;
    const wallet = {
      address,
      coin,
      amount: '20000'
    };

    return wallet;
  }
}
