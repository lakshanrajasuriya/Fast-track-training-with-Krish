import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Owner, OwnerSchema } from 'src/schemas/owner.schema';
import { OwnerRepository } from './owner.repository';
import { OwnersController } from './owners.controller';
import { OwnersService } from './owners.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Owner.name, schema: OwnerSchema }]),
  MongooseModule.forFeature([{ name: Owner.name, schema: OwnerSchema }])],
  controllers: [OwnersController],
  providers: [OwnersService, OwnerRepository]
})
export class OwnersModule { }
