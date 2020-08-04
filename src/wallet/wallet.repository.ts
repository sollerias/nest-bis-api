import { Repository, EntityRepository } from "typeorm";
import { Wallet } from "./wallet.entity";
import { WalletCreateDto } from "./dto/walet-create.dto";
import { InternalServerErrorException } from "@nestjs/common";

@EntityRepository(Wallet)
export class WalletRepository extends Repository<Wallet> {
  async createWallet(walletCreateDto: WalletCreateDto): Promise<{
    isCoinAvailable: boolean,
    address: string,
  }> {
    const { coin } = walletCreateDto;

    const wallet = new Wallet();

    wallet.address = `${coin}1tiutbhuwqw27r4z0xkg6kr7x7vu6c4v9v94n`;
    wallet.isCoinAvailable = true;
    wallet.privKey = 'sdflj445f9ajrtjqqj324jgt93q490gvij'
    wallet.pubKey = 'kghjf2341gdf5f9ajrtjqqj324jgt93q490gvij'
    try {
      await wallet.save();
      return {
        isCoinAvailable: true,
        address:  wallet.address
      }
    } catch (error) {
      console.log('WalletRepository/error: ', error);
      throw new InternalServerErrorException();
    }
  }
}