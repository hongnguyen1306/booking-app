import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DestinationsModule } from './api/admin/destinations/destinations.module';
import { UrlModule } from './url/url.module';
import { Destination } from './database/models/destination.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'dev',
      password: 'dev',
      database: 'bookingstore',
      entities: [Destination],
      synchronize: true,
    }),
    UrlModule,
    DestinationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
