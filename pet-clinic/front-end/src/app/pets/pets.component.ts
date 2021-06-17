import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PetService } from 'src/api/pet.service';
import { DataService } from 'src/shared/data.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {
  pets: any = [];

  constructor(
    private petService: PetService,
    private router: Router,
    private toastr: ToastrService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getPetData();
  }

  getPetData() {
    this.petService.getAllPets().subscribe(result => {
      this.pets = result;
    })
  }

  editPet(pet: any): void {
    this.dataService.addData(pet);
    this.router.navigate(['edit-pet/', { pet: pet }]);
  }

  addNewPet(): void {
    this.router.navigate(['add-new-pet/'])
  }

  deletePet(pet: any): void {
    this.petService.deletePet(pet._id).subscribe({
      next: result => {

        if (result.status === 204) {
          this.toastr.success('Successfully Deleted', pet.name)
          this.getPetData();
        } else {
          this.toastr.error('Cannot delete the record', 'Error!')
        }
      },
      error: error => {
        this.toastr.error('Cannot delete the record', 'Error!')
      }
    })
  }

}
