import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MicroController } from './micro.controller';
import { MicroService } from './micro.service';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'BTC_MESSAGE', transport: Transport.NATS },
    ]),
  ],
  controllers: [MicroController],
  providers: [MicroService],
  exports: [MicroService]
})
export class MicroModule {}
