import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetsModule } from './pets/pets.module';
import { OwnersModule } from './owners/owners.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [PetsModule, OwnersModule,MongooseModule.forRoot('mongodb://localhost:27017/pet-clinic')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
