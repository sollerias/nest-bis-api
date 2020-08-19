import { Module } from '@nestjs/common';
import { WalletController } from './wallet.controller';
import { WalletService } from './wallet.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WalletRepository } from './wallet.repository';
import { MicrosModule } from 'src/micros/micros.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([WalletRepository]),
    MicrosModule,
  ],
  controllers: [WalletController],
  providers: [WalletService]
})
export class WalletModule {}
