import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { startKeepAlive } from './keep-alive';

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

  // Health check endpoint (dùng cho Render health check + keep-alive ping)
  app
    .getHttpAdapter()
    .get('/api/health', (_req: unknown, res: { json: (body: unknown) => void }) => {
      res.json({ status: 'ok', uptime: process.uptime(), timestamp: new Date().toISOString() });
    });

  const port = process.env.PORT || 3000;
  await app.listen(port, '0.0.0.0');
  console.log(`🚀 NestJS Backend server listening at http://localhost:${port}/api`);
  startKeepAlive();
}
bootstrap();
