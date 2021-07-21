import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private basePath = 'http://localhost:3500';

  constructor(private http: HttpClient) { }

  upload(file: any) {
    return this.http.post(`${this.basePath}/upload`, file);
  }
}
