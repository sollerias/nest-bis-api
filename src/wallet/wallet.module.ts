import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { WalletController } from './wallet.controller';
import { WalletService } from './wallet.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WalletRepository } from './wallet.repository';
import { MicrosModule } from 'src/micros/micros.module';

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
    TypeOrmModule.forFeature([WalletRepository]),
    MicrosModule,
  ],
  controllers: [WalletController],
  providers: [WalletService]
})
export class WalletModule {}
