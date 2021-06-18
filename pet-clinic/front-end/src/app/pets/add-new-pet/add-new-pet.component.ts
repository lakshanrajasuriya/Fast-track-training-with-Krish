import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PetService } from 'src/api/pet.service';
import { Pet } from 'src/model/pet';

@Component({
  selector: 'app-add-new-pet',
  templateUrl: './add-new-pet.component.html',
  styleUrls: ['./add-new-pet.component.scss']
})
export class AddNewPetComponent implements OnInit {

  petForm = this.formBuilder.group({
    name: '',
    age: 1,
    breed: '',
    color: ''
  })

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private petService: PetService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.petForm.status === "VALID") {
      this.addNewRecord();
    } else {
      this.toastr.error('Please complete the form before submit', 'Error!')
    }
  }

  addNewRecord(): void {
    const pet = this.petForm.getRawValue();

    this.petService.createPet(pet).subscribe({
      next: data => {
        this.toastr.success('Successfully Added', pet.name)
        this.goBack();
      },
      error: error => {
        this.toastr.error('Invalid data', 'Error!')
      }
    })
  }

  goBack(): void {
    this.router.navigate(['pets'])
  }

}
