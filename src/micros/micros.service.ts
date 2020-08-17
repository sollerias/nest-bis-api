import { Injectable, Logger, Inject } from '@nestjs/common';
import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices';
import { WalletCreateDto } from 'src/wallet/dto/walet-create.dto';

@Injectable()
export class MicrosService {
  private logger = new Logger('MicroService');

  constructor(
    @Inject('WALLET')
    private walletMicroService: ClientProxy,
  ) {}

  async getWalletCredentials(walletCreateDto: WalletCreateDto): Promise<any> {
    // const result = await this.client.send('create_wallet1', walletCreateDto);
    return new Promise ((resolve, reject) => {
      this.walletMicroService
      .send({cmd: 'create_wallet1'},{
        username: 'Kek Vorobek',
        message: 'be with you',
      })
      .subscribe({
        next: users => {
          console.log('Wallet Service return: ', users);
          // return users;
          return resolve(users);

        },
        error: error => {
          console.log(error);
          return reject(error);
        }
    });
    })
  }
}
