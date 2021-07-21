import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateVehicleComponent } from './update-vehicle/update-vehicle.component';
import { VehiclesComponent } from './vehicles/vehicles.component';

const routes: Routes = [
    { path: '', redirectTo: 'vehicles', pathMatch: 'full' },
    { path: 'vehicles', component: VehiclesComponent },
    { path: 'update-vehicle/:id', component: UpdateVehicleComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }