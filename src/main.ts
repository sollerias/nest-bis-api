import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const logger = new Logger('Main');

const internalMicroserviceOptions = {
  transport: Transport.NATS,
  options: {
    url: 'nats://127.0.0.1:14222',
  },
};


async function bootstrap() {
  // Begin: HTTP Server
  const httpApp = await NestFactory.create(AppModule,
    {
      logger: ['log', 'error', 'warn', 'debug'],
    });
  // End: HTTP Server

  // Begin: Internal NATS Microservice
  const internalMicroservice = await NestFactory.createMicroservice(AppModule, internalMicroserviceOptions);
  // End: Internal NATS Microservice

  await httpApp.listen(process.env.PORT || 8000);
  await internalMicroservice.listen(() => {
    logger.log('InternalMicroservice is listening...');
  })
}
bootstrap();
