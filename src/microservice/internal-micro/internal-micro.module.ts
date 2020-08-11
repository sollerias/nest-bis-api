import { Module } from '@nestjs/common';
import { InternalMicroController } from './internal-micro.controller';
import { InternalMicroService } from './internal-micro.service';

@Module({
  controllers: [InternalMicroController],
  providers: [InternalMicroService]
})
export class InternalMicroModule {}
