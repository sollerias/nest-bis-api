import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { typeOrmConfig } from './config/typeorm.config';
import { WalletModule } from './wallet/wallet.module';
import { TransactionModule } from './transaction/transaction.module';
import { CoinModule } from './coin/coin.module';
import { MicrosModule } from './micros/micros.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ConfigModule.forRoot({
      envFilePath: './.env',
      isGlobal: true
    }),
    AuthModule,
    WalletModule,
    TransactionModule,
    CoinModule,
    MicrosModule,
  ],
})

export class AppModule {}
