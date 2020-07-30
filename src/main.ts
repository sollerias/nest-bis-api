import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,
    {
      logger: ['log', 'error', 'warn', 'debug'],
    });
  console.log('THIS IS PORTAAAAA!: ', process.env.PORT);
  await app.listen(process.env.PORT || 8000);
}
bootstrap();
