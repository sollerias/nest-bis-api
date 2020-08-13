import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';

const logger = new Logger('Main');

const externalMicroserviceOptions = {
  transport: Transport.NATS,
  options: {
    url: 'nats://127.0.0.1:24222',
  },
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.NATS,
    options: {
      url: 'nats://127.0.0.1:14222',
    },
  });

  await app.startAllMicroservicesAsync();
  await app.listen(process.env.PORT || 8000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
