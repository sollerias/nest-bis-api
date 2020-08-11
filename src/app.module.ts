import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { WalletModule } from './wallet/wallet.module';
import { TransactionModule } from './transaction/transaction.module';
import { CoinModule } from './coin/coin.module';
import { InternalMicroModule } from './microservice/internal-micro/internal-micro.module';
import { ExternalMicroModule } from './microservice/external-micro/external-micro.module';
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
    }),
    InternalMicroModule,
    ExternalMicroModule
  ],
})

export class AppModule {}
