import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { ServiceEntity } from './auth/service.entity';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'sollerij',
      password: 'eLdp@2ohwNBSY3xKLB77',
      database: 'test_db',
      entities: [ServiceEntity],
      logging: true,
    }),
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
})

export class AppModule {
  constructor(private connection: Connection) {};
}
