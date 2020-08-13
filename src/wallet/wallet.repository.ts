import { Repository, EntityRepository } from "typeorm";
import { Wallet } from "./wallet.entity";
import { WalletCreateDto } from "./dto/walet-create.dto";
import { WalletImportDto } from "./dto/wallet-import.dto";

import { InternalServerErrorException, Logger } from "@nestjs/common";

@EntityRepository(Wallet)
export class WalletRepository extends Repository<Wallet> {
  private logger = new Logger('WalletRepository');
  /**
   * createWallet() - create wallet
   * @param walletCreateDto
   */
  async createWallet(walletCreateDto: WalletCreateDto): Promise<{
    isCoinAvailable: boolean,
    address: string,
  }> {
    const { coin } = walletCreateDto;

    const wallet = new Wallet();
    this.logger.log(coin);
    wallet.address = `${coin}1tiutbhuwqw27r4z0xkg6kr7x7vu6c4v9v94n`;
    wallet.isCoinAvailable = true;
    wallet.privKey = 'sdflj445f9ajrtjqqj324jgt93q490gvij';
    wallet.pubKey = 'kghjf2341gdf5f9ajrtjqqj324jgt93q490gvij';
    try {
      await wallet.save();
      return await {
        isCoinAvailable: true,
        address:  wallet.address
      };
    } catch (error) {
      console.log('WalletRepositoryCreate/error: ', error);
      throw new InternalServerErrorException();
    }
  }

  /**
   * importWallet() - import wallet
   * @param walletImportDto
   */
  async importWallet(walletImportDto: WalletImportDto): Promise<{
    isCoinAvailable: boolean,
    address: string,
  }> {
    const { coin, privKey } = walletImportDto;

    const wallet = new Wallet();

    wallet.address = `${coin}1tiutbhuwqw27r4z0xkg6kr7x7vu6c4v9v94n`;
    wallet.isCoinAvailable = true;
    wallet.privKey = privKey;
    wallet.pubKey = 'kghjf2341gdf5f9ajrtjqqj324jgt93q490gvij';
    try {
      await wallet.save();
      return {
        isCoinAvailable: true,
        address:  wallet.address
      }
    } catch (error) {
      console.log('WalletRepositoryImport/error: ', error);
      throw new InternalServerErrorException();
    }
  }
}