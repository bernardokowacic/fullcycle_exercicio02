import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoutesController } from './routes/routes.controller';

@Module({
  imports: [],
  controllers: [AppController, RoutesController],
  providers: [AppService],
})
export class AppModule {}
