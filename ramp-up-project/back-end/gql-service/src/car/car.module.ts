import { Module } from '@nestjs/common';
import { CarResolver } from './car.resolver';
import { CarService } from './car.service';

@Module({
    imports: [],
    providers: [CarService, CarResolver]
})
export class CarModule {

}