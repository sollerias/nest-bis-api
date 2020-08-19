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
  async createWallet(address: string): Promise<{
    isCoinAvailable: boolean,
    address: string,
  }> {
    // const { coin } = walletCreateDto;

    const wallet = new Wallet();
    this.logger.log(address);
    wallet.address = address;
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
  async importWallet(address: string): Promise<{
    isCoinAvailable: boolean,
    address: string,
  }> {

    const wallet = new Wallet();

    wallet.address = address;
    wallet.isCoinAvailable = true;
    wallet.privKey = '3wedf2341gdf5f9ajrtjqqj324jgt93q490gvij';
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