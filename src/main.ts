import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configure the API Gateway to listen on port 3000
  await app.listen(3000); // API Gateway will be accessible on localhost:3000
}
bootstrap();
