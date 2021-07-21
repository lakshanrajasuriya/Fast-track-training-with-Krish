import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { UpdateVehicleComponent } from './update-vehicle/update-vehicle.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiclesComponent,
    UpdateVehicleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GraphQLModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
