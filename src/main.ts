import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Set global route prefix to /api
  app.setGlobalPrefix('api');

  // Enable Cross-Origin Resource Sharing (CORS) for all local frontend/admin ports
  app.enableCors({
    origin: true,
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    credentials: true,
  });

  // Enable global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: false,
    }),
  );

  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`🚀 NestJS Backend server listening at http://localhost:${port}/api`);
}
bootstrap();
