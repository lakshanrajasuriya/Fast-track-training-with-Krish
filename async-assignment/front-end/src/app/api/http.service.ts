import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private basePath: string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  checkAnagram(body: any): Observable<string> {
    return this.http.post<string>(`${this.basePath}/anagram`, body);
  }

  findLargeNumber(body: any): Observable<string> {
    return this.http.post<string>(`${this.basePath}/findlargest`, body);
  }

  letterOccurance(body: any): Observable<string> {
    return this.http.post<string>(`${this.basePath}/occurance`, body);
  }
}
