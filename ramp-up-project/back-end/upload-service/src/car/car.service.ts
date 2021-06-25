import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from 'src/entities/car.entity';
import { CarCreateDTO } from 'src/dto/car.create.dto'

@Injectable()
export class CarService {

    constructor(@InjectRepository(Car) private carRepository: Repository<Car>) { }

    findAll(): Promise<Car[]> {
        return this.carRepository.find();
    }

    create(car: CarCreateDTO): Promise<Car> {
        let newCar = this.carRepository.create(car);
        return this.carRepository.save(newCar);
    }
}