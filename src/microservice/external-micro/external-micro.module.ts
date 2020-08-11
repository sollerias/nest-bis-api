import { Module } from '@nestjs/common';
import { ExternalMicroController } from './external-micro.controller';
import { ExternalMicroService } from './external-micro.service';

@Module({
  controllers: [ExternalMicroController],
  providers: [ExternalMicroService]
})
export class ExternalMicroModule {}
