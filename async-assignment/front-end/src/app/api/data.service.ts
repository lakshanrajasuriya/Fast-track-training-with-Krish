import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpService) { }

  checkAnagram(body: any): Observable<string> {
    return this.http.checkAnagram(body)
  }

  findLargeNumber(body: any): Observable<string> {
    return this.http.findLargeNumber(body)
  }

  letterOccurance(body: any): Observable<string> {
    return this.http.letterOccurance(body)
  }


}
