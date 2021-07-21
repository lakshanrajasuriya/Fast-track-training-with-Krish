import { gql } from 'apollo-server-express';
export const QUERY_GET_ALL_CARS_FILTERED = gql`
query($first:Int,$offset:Int,$carModel:String,$orderBy:[CarsOrderBy!]){
    allCars(
        first:$first
        offset:$offset
        orderBy:$orderBy
        filter:{carModel:{startsWith:$carModel}}
    ){
        nodes{
            id
            firstName
            lastName
            email
            carMake
            carModel
            vin
            manufacturedDate
            age
        }
        totalCount
    }
}`;

export const QUERY_GET_ALL_CARS = gql`
query{allCars{
    nodes{
        id
            firstName
            lastName
            email
            carMake
            carModel
            vin
            manufacturedDate
            age
    }
    totalCount
  }}`

export const QUERY_GET_CAR_BY_ID = gql`
query($id:Int!){
  carById(id: $id) {
    id
    firstName
            lastName
            email
            carMake
            carModel
            vin
            manufacturedDate
            age
  }
}`

export const QUERY_GET_CAR_BY_MODEL = gql`
query($model:String!){
  carById(model: $model) {
    id
    firstName
            lastName
            email
            carMake
            carModel
            vin
            manufacturedDate
            age
  }
}`

export const MUTATION_UPDATE_CAR = gql`
  mutation(
  $id:Int!
  $carMake:String
  $carModel:String
  $email:String
  $firstName:String
  $lastName:String
  $vin:String
  ){
    updateCarById(
    input: {carPatch: {id: $id,carMake: $carMake, carModel:$carModel, email: $email, firstName: $firstName, lastName: $lastName, vin: $vin}, id: $id}
  ) {
    car {
        id
        firstName
        lastName
        email
        carMake
        carModel
        vin
        manufacturedDate
        age
    }
  }
  }
  `

export const MUTATION_DELETE_CAR_BY_ID = gql`
  mutation($id:Int!){
    deleteCarById(input: {id: $id}) {
    car {
      id
        firstName
        lastName
        email
        carMake
        carModel
        vin
        manufacturedDate
        age
    }}}`


export const MUTATION_CREATE_CAR = gql`
  mutation(
  $id:Int!
  $firstName:String!
  $lastName:String!
  $carMake:String!
  $carModel:String!
  $email:String!
  $vin:String!
  $manufacturedDate:Datetime!
  $age:Int!
  ){
    createCar(
    input: {car: {id: $id,firstName: $firstName, lastName: $lastName,carMake: $carMake, carModel:$carModel, email: $email,  vin: $vin,  manufacturedDate: $manufacturedDate,  age: $age}}
  ) {
    car {
      id
        firstName
        lastName
        email
        carMake
        carModel
        vin
        manufacturedDate
        age
    }}}`