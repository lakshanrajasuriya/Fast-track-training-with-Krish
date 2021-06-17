import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Owner } from "src/model/owner";
import { Pet } from "src/model/pet";

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    private basePath = "http://localhost:3000";

    constructor(private http: HttpClient) { }

    getAllPets(): Observable<Pet> {
        return this.http.get<Pet>(`${this.basePath}/pets`);
    }

    getPetById(id: string): Observable<Pet> {
        return this.http.get<Pet>(`${this.basePath}/pets/${id}`);
    }

    createPet(body: any): Observable<Pet> {
        return this.http.post<Pet>(`${this.basePath}/pets/`, body);
    }

    updatePet(id: string, body: any): Observable<Pet> {
        return this.http.put<Pet>(`${this.basePath}/pets/${id}`, body);
    }

    deletePet(id: string): Observable<any> {
        return this.http.delete<Pet>(`${this.basePath}/pets/${id}`, { observe: 'response' });
    }

    getAllOwners(): Observable<Owner> {
        return this.http.get<Owner>(`${this.basePath}/owners`);
    }


}