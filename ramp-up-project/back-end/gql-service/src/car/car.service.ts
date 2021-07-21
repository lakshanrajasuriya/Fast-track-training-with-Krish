import { Injectable } from '@nestjs/common';
import { MUTATION_CREATE_CAR, MUTATION_DELETE_CAR_BY_ID, MUTATION_UPDATE_CAR, QUERY_GET_ALL_CARS, QUERY_GET_ALL_CARS_FILTERED, QUERY_GET_CAR_BY_ID, QUERY_GET_CAR_BY_MODEL } from './queries/query';
import { request } from 'graphql-request'
import { Car } from './entities/car.entity';
import { CarCreateDTO, CarUpdateDTO } from 'src/graphql';

@Injectable()
export class CarService {
    private endpoint = "http://localhost:5000/graphql";

    async findOne(id: number) {
        const query = QUERY_GET_CAR_BY_ID;
        const variables = { "id": id };
        let output = await request(this.endpoint, query, variables);
        return output.carById;
    }

    async findAll() {
        const query = QUERY_GET_ALL_CARS;
        let output = await request(this.endpoint, query);
        return output.allCars.nodes;
    }

    async searchByModel(model: string) {
        const query = QUERY_GET_CAR_BY_MODEL;
        const variables = { "model": model };
        let output = await request(this.endpoint, query, variables);
        console.log(output)
        // return output.carById;
    }

    async create(car: CarCreateDTO): Promise<Car> {
        const mutation = MUTATION_CREATE_CAR;
        let output = await request(this.endpoint, mutation, car);
        return output.createCar.car;
    }

    async getAllCarsFilteredAsc(first: number, offset: number, orderBy: string, carModel: string) {
        const query = QUERY_GET_ALL_CARS_FILTERED;
        const variables = {
            "first": first,
            "offset": offset,
            "orderBy": orderBy,
            "carModel": carModel
        }

        let output = await request(this.endpoint, query, variables);
        const cars = output.allCars();
        return cars;
    }

    async updateCar(updatCar: CarUpdateDTO) {
        const mutation = MUTATION_UPDATE_CAR;
        let output = await request(this.endpoint, mutation, updatCar);
        return output.updateCarById.car;
    }

    async deleteCar(id: number) {
        const mutation = MUTATION_DELETE_CAR_BY_ID;
        const variables = { "id": id };
        let output = await request(this.endpoint, mutation, variables);
        return output.deleteCarById.car;
    }
}