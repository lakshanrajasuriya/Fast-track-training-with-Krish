import { Component, OnInit } from '@angular/core';
import { Car } from '../models/car';
import { VehicleService } from '../api/vehicle.service';
import { HttpService } from '../api/http.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {
  selectedFile!: File;
  cars: Car[] = [];

  constructor(private vehicleService: VehicleService, private http: HttpService) { }


  ngOnInit(): void {
    this.onLoadData();
  }

  onLoadData(): void {
    this.vehicleService.getVehicle()
      .valueChanges
      .subscribe(({ data, loading }) => {
        console.log(loading);
        this.cars = data.getAllCars;
      })
  }

  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload() {
    const fd = new FormData();
    fd.append('file', this.selectedFile, this.selectedFile.name);
    this.http.upload(fd)
      .subscribe(res => {
        console.log(res);
      })
  }

  onDelete(id: any) {
    this.vehicleService.delete(id)
      .subscribe(({ data }) => {
        this.onLoadData()
      })
  }

  search(event: any): void {
    console.log(event.target.value);
  }

}
