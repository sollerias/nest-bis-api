import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MicrosController } from './micros.controller';
import { MicrosService } from './micros.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'WALLET',
        transport: Transport.NATS,
        options: {
          url: 'nats://localhost:14222',
        },
      },
    ]),
  ],
  controllers: [MicrosController],
  providers: [MicrosService],
  exports: [MicrosService]
})
export class MicrosModule {}
