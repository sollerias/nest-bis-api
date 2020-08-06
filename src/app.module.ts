import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { WalletModule } from './wallet/wallet.module';
import { TransactionModule } from './transaction/transaction.module';
import { CoinModule } from './coin/coin.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    WalletModule,
    TransactionModule,
    CoinModule,
    ConfigModule.forRoot({
      envFilePath: './.env',
      isGlobal: true
    })
  ],
})

export class AppModule {}
