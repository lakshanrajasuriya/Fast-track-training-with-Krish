import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileProducerService } from './producer/file-producer.service';
import { FileConsumer } from './consumer/file.consumer';


@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 5003
      }
    }),
    BullModule.registerQueue({
      name: 'file-operation-queue'
    })
  ],
  controllers: [AppController],
  providers: [AppService, FileProducerService, FileConsumer],
})
export class AppModule { }
