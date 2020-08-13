import { Module } from '@nestjs/common';
import { MicrosController } from './micros.controller';
import { MicrosService } from './micros.service';

@Module({
  controllers: [MicrosController],
  providers: [MicrosService]
})
export class MicrosModule {}
