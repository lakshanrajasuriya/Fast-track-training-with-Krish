import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { gql, Apollo } from 'apollo-angular';

const getAllCars = gql`
query{
  getAllCars{
    id,
    firstName,
    lastName,
    email,
    carMake,
    carModel,
    vin,
    manufacturedDate,
    age
  }
}
`;

const deleteCarById = gql`
mutation($id:Int!){
    deleteCar(id: $id) {
      id
        firstName
        lastName
        email
        carMake
        carModel
        vin
        manufacturedDate
        age
    }}
`;

const updateCar = gql`
mutation ($id:Int!
  $firstName:String!
  $lastName:String!
  $carMake:String!
  $carModel:String!
  $email:String!
  $vin:String!
  ){
    updateCar(
    car: {id: $id,firstName: $firstName, lastName: $lastName,carMake: $carMake, carModel:$carModel, email: $email,  vin: $vin}
  ) {
      id,
        firstName,
        lastName,
        email,
        carMake,
        carModel,
        vin,
        manufacturedDate,
        age
  
}}`

const getACar = gql`
query($id:Int!){
  getACar(id:$id){
    id,
    firstName,
    lastName,
    email,
    carMake,
    carModel,
    vin,
    manufacturedDate,
    age
  }
}
`;

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient, private apollo: Apollo) { }

  getAllVehicles() {
    return this.apollo.watchQuery<any>({
      query: getAllCars
    }).valueChanges
  }

  getVehicleById(id: number) {

    return this.apollo.watchQuery<any>({
      query: getACar,
      variables: {
        id: id
      }
    })
      .valueChanges
  }

  updateVehicle(id: number, vehicle: any) {

    return this.apollo.mutate({
      mutation: updateCar,
      variables: {
        id: +id,
        firstName: vehicle.firstName,
        lastName: vehicle.lastName,
        email: vehicle.email,
        carMake: vehicle.carMake,
        carModel: vehicle.carModel,
        vin: vehicle.vin
      }
    });

  }

  delete(id: any) {
    return this.apollo.mutate({
      mutation: deleteCarById,
      variables: {
        id: +id
      }
    })
  }
}
