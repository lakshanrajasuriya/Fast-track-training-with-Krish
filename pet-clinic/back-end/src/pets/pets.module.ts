import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsController } from './pets.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pet, PetSchema } from 'src/schemas/pet.schema';
import { Owner, OwnerSchema } from 'src/schemas/owner.schema';
import { PetRepository } from './pet.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: Pet.name, schema: PetSchema }]),
  MongooseModule.forFeature([{ name: Owner.name, schema: OwnerSchema }])],
  providers: [PetsService, PetRepository],
  controllers: [PetsController]
})
export class PetsModule { }
