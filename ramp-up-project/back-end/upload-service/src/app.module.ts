import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileProducerService } from './producer/file-producer.service';
import { FileConsumer } from './consumer/file.consumer';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarService } from './car/car.service';
import { Car } from './entities/car.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([Car]),
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 5003
      }
    }),
    BullModule.registerQueue({
      name: 'file-operation-queue'
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'automobile',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true
    })
  ],
  controllers: [AppController],
  providers: [AppService, FileProducerService, FileConsumer, CarService],
})
export class AppModule { }
