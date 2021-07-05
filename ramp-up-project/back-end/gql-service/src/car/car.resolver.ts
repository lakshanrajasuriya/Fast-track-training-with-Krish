import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CarCreateDTO, CarUpdateDTO } from 'src/graphql';
import { CarService } from './car.service';
import { Car } from './entities/car.entity';

@Resolver(() => Car)
export class CarResolver {
    constructor(private carService: CarService) { }

    @Query()
    async getAllCarsFilteredAsc(@Args('first') first: number,
        @Args('offset') offset: number, @Args('orderBy') orderBy: string, @Args('carModel') carModel: string) {
        return await this.carService.getAllCarsFilteredAsc(first, offset, orderBy, carModel);
    }

    @Query(() => [Car], { name: 'getAllCars' })
    getAllCars() {
        return this.carService.findAll();
    }

    @Query(() => Car, { name: 'getACar' })
    getACar(@Args('id') id: number) {
        return this.carService.findOne(id);
    }

    @Mutation(() => Car, { name: 'createNewCar' })
    create(@Args('car') car: CarCreateDTO) {
        return this.carService.create(car);
    }

    @Mutation(() => Car, { name: 'updateCar' })
    update(@Args('car') car: CarUpdateDTO) {
        return this.carService.updateCar(car);
    }

    @Mutation(() => Car, { name: 'deleteCar' })
    deleteCar(@Args('id') id: number) {
        return this.carService.deleteCar(id);
    }
}