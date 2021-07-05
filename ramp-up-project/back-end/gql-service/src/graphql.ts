
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface CarCreateDTO {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    carMake: string;
    carModel: string;
    vin: string;
    manufacturedDate: string;
    age?: number;
}

export interface CarUpdateDTO {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    carMake: string;
    carModel: string;
    vin: string;
}

export interface Car {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    carMake: string;
    carModel: string;
    vin: string;
    manufacturedDate: string;
    age: number;
}

export interface CardataConn {
    nodes: Car[];
    totalCount: number;
}

export interface IQuery {
    getAllCarsFilteredAsc(first: number, offset: number, orderBy: string, carModel: string): CardataConn | Promise<CardataConn>;
    getAllCars(): Car[] | Promise<Car[]>;
    getACar(id: number): Car | Promise<Car>;
}

export interface IMutation {
    createNewCar(car: CarCreateDTO): Car | Promise<Car>;
    updateCar(car: CarUpdateDTO): Car | Promise<Car>;
    deleteCar(id: number): Car | Promise<Car>;
}
