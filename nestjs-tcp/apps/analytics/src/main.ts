import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AnalyticsModule } from './analytics.module';

async function bootstrap() {
  const app = await NestFactory.create(AnalyticsModule);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      port: 3002,
    },
  });
  await app.startAllMicroservices();
  await app.listen(3001);
}
bootstrap();
