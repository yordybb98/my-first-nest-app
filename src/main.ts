import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Swagger
  const config = new DocumentBuilder()
  .setTitle('Nest js example')
  .setDescription('A brief description of your API')
  .setVersion('1.0')
  .addTag('nestjsApi')
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  //Global Pipes
  app.useGlobalPipes(new ValidationPipe({
    whitelist : true
  }));

  //Cors
  app.enableCors(
    // {
    // origin: 'http://localhost:3000'}
  ); 

  await app.listen(3000);
}
bootstrap();
