import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Owner } from "src/model/owner";
import { HttpService } from "./http.service";

@Injectable({
    providedIn: 'root'
})
export class OwnerService {
    constructor(private http: HttpService) { }

    getAllOwners(): Observable<Owner> {
        return this.http.getAllOwners();
    }

    /* getOwnerById(id: string): Observable<Owner> {
        return this.http.getOwnerById(id);
    }

    createOwner(body: any): Observable<Owner> {
        return this.http.createOwner(body);
    }

    updateOwner(id: string, body: any): Observable<Owner> {
        return this.http.updateOwner(id, body);
    }

    deleteOwner(id: string) {
        return this.http.deleteOwner(id);
    } */
}