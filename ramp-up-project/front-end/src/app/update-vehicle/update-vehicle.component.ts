import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { gql, Apollo } from 'apollo-angular';
import { Car } from '../models/car';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.component.html',
  styleUrls: ['./update-vehicle.component.scss']
})
export class UpdateVehicleComponent implements OnInit {
  car!: Car;
  carForm!: FormGroup;

  MUTATION_UPDATE_CAR = gql`
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

  getACar = gql`
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
  constructor(private formBuilder: FormBuilder, private apollo: Apollo, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.onLoadData();
  }

  onLoadData(): void {
    let id: number = Number(this.route.snapshot.paramMap.get("id"));

    this.apollo.watchQuery<any>({
      query: this.getACar,
      variables: {
        id: id
      }
    })
      .valueChanges
      .subscribe(({ data, loading }) => {
        console.log(loading);
        this.car = data.getACar;
        console.log(this.car)
        this.setForm();
      })

  }

  setForm(): void {
    this.carForm = this.formBuilder.group({
      id: new FormControl({ value: this.car.id, disabled: true }, Validators.required),
      firstName: new FormControl(this.car.firstName, Validators.required),
      lastName: new FormControl(this.car.lastName, Validators.required),
      email: new FormControl(this.car.email, Validators.required),
      carMake: new FormControl(this.car.carMake, Validators.required),
      carModel: new FormControl(this.car.carModel, Validators.required),
      vin: new FormControl(this.car.vin, Validators.required)
    })
  }

  onSubmit(): void {
    console.log(this.carForm.getRawValue())
    this.submitData();
  }

  submitData() {

    this.apollo.mutate({
      mutation: this.MUTATION_UPDATE_CAR,
      variables: {
        id: +this.carForm.value.id,
        firstName: this.carForm.value.firstName,
        lastName: this.carForm.value.lastName,
        email: this.carForm.value.email,
        carMake: this.carForm.value.carMake,
        carModel: this.carForm.value.carModel,
        vin: this.carForm.value.vin

      }
    }).subscribe(({ data }) => {
      console.log(data);
      this.router.navigate(['/']);
      // let gadgets = Object.assign([], this.allGadets)
      // gadgets.unshift(data["Save"]);
      // this.allGadets = gadgets;
    })

  }

}
