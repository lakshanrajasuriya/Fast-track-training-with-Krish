import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Car } from '../models/car';
import { Router, ActivatedRoute } from '@angular/router';
import { VehicleService } from '../api/vehicle.service';

@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.component.html',
  styleUrls: ['./update-vehicle.component.scss']
})
export class UpdateVehicleComponent implements OnInit {
  car!: Car;
  carForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private vehicleService: VehicleService
  ) { }

  ngOnInit(): void {
    this.onLoadData();
  }

  onLoadData(): void {
    let id: number = Number(this.route.snapshot.paramMap.get("id"));

    this.vehicleService.getVehicleById(id)
      .subscribe(({ data, loading }) => {
        console.log(loading);
        this.car = data.getACar;
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
    this.submitData();
  }

  submitData() {

    this.vehicleService.updateVehicle(this.car.id, this.carForm.value)
      .subscribe(({ data }) => {
        this.router.navigate(['/']);
      })
  }

}
