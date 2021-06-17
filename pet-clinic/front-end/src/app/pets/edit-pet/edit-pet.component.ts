import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { PetService } from 'src/api/pet.service';
import { DataService } from 'src/shared/data.service';
import { Pet } from 'src/model/pet';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.scss']
})
export class EditPetComponent implements OnInit, OnDestroy {

  petId: string = "";
  subscription!: Subscription;

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
    private toastr: ToastrService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.subscription = this.dataService.current.subscribe({
      next: result => {
        this.petId = result._id;
        this.petForm.get('name')?.setValue(result.name);
        this.petForm.get('age')?.setValue(result.age);
        this.petForm.get('breed')?.setValue(result.breed);
        this.petForm.get('color')?.setValue(result.color);
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit(): void {
    const pet = this.petForm.getRawValue();

    this.petService.updatePet(this.petId, pet).subscribe({
      next: data => {
        this.toastr.success('Successfully Updated', pet.name)
        this.goBack();
      },
      error: error => {
        this.toastr.error('Cannot update data', 'Error!')
      }
    })
  }

  goBack(): void {
    this.router.navigate(['pets'])
  }

}
