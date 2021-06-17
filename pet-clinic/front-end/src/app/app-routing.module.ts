import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OwnersComponent } from './owners/owners.component';
import { AddNewPetComponent } from './pets/add-new-pet/add-new-pet.component';
import { EditPetComponent } from './pets/edit-pet/edit-pet.component';
import { PetsComponent } from './pets/pets.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pets', component: PetsComponent },
  { path: 'edit-pet', component: EditPetComponent },
  { path: 'add-new-pet', component: AddNewPetComponent },
  { path: 'owners', component: OwnersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
