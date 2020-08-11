import { Controller, Logger, Post, Get } from '@nestjs/common';
import { MessagePattern, EventPattern } from '@nestjs/microservices';
import { MicroService } from './micro.service';

@Controller('micro')
export class MicroController {
  private logger = new Logger('MicroController');

  constructor(private microService: MicroService) {}

  @Get('test')
  async message () {
    return await this.microService.setWebhook();
  }

  @Get('test_event')
  async event () {
    return await this.microService.setEvent();
  }

  // @EventPattern('btc_message') 
  // async setWebhook(data: any) {
  //   // business logic
  //   this.logger.log(data);
  //   await this.microService.setWebhook();
  // }

  @EventPattern('btc_event')
  async eventMessage(data: {
    username: string,
    message: string,
  }): Promise<any> {
    const { username, message } = data;
    this.logger.log(`btc username: ${username}; message: ${message}`)
    return {
      error: false,
      message,
    };
  }
}
