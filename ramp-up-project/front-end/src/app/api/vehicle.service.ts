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

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient, private apollo: Apollo) { }

  getVehicle() {
    return this.apollo.watchQuery<any>({
      query: getAllCars
    })
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
