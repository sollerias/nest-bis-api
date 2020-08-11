import { Injectable, Logger, Inject } from '@nestjs/common';
import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class MicroService {
  private client: ClientProxy;
  private logger = new Logger('MicroService');

  constructor(
    @Inject('BTC_MESSAGE') 
    private authService: ClientProxy
  ) {
    this.client = ClientProxyFactory.create({
      transport: Transport.NATS,
      options: {
        url: 'nats://localhost:14222',
      },
    });
    this.client.connect();
  }

  async setWebhook(): Promise<any>  {
    const result = await this.client.send('btc_message', {
      username: 'dksdk',
      message: 'fsdfsf'
    });
    this.logger.log(result);

    return result;
  }

  async setEvent(): Promise<any>  {
    const result = await this.client.emit<number>('btc_event', {});
    this.logger.log(result);

    return result;
  }

}
