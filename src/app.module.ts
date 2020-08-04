import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { WalletsModule } from './wallets/wallets.module';
import { TransactionsModule } from './transactions/transactions.module';
import { CoinsModule } from './coins/coins.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    WalletsModule,
    TransactionsModule,
    CoinsModule,
    AuthModule
  ],
})

export class AppModule {}
