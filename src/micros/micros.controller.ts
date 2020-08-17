import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller('micros')
export class MicrosController {
  @MessagePattern({ cmd: 'create_wallet1' })
  async receiveCredentials(data: {
    username: string,
    message: string,
  }): Promise<any>{
    const { username, message } = data;
    console.log(data);
    const result = {
      error: false,
      message: `Captain ${username} ${message} forever!`,
    };
    return result;
  }
}
