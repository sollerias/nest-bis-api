import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,
    {
      logger: ['log', 'error', 'warn', 'debug'],
    });

    const options = new DocumentBuilder()
    .setTitle('BIS API')
    .setDescription('API for exchange data between Go services and blockchain cryptowallet resources')
    .setVersion('1.0')
    .addTag('bis')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 8000);
}
bootstrap();
