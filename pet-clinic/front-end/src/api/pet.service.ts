import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pet } from "src/model/pet";
import { HttpService } from "./http.service";

@Injectable({
    providedIn: 'root'
})
export class PetService {
    constructor(private http: HttpService) { }

    getAllPets(): Observable<Pet> {
        return this.http.getAllPets();
    }

    getPetById(id: string): Observable<Pet> {
        return this.http.getPetById(id);
    }

    createPet(body: any): Observable<Pet> {
        return this.http.createPet(body);
    }

    updatePet(id: string, body: any): Observable<Pet> {
        return this.http.updatePet(id, body);
    }

    deletePet(id: string) {
        return this.http.deletePet(id);
    }
}