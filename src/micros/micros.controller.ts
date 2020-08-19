import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('micros')
export class MicrosController {
  @MessagePattern({ cmd: 'create_wallet_coin' })
  async receiveCredentials(data: {
    error: false,
    message: string,
  }): Promise<any>{
    const { error, message } = data;
    console.log(data);
    const result = {
      error: false,
      message: `Captain ${error} ${message} forever!`,
    };
    return result;
  }
}
