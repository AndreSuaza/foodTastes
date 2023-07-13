import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TastesController } from './tastes/tastes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TastesModule } from './tastes/tastes.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(process.env.URL_DB), 
    TastesModule
  ],
  controllers: [AppController, TastesController],
  providers: [AppService],
})
export class AppModule {}
