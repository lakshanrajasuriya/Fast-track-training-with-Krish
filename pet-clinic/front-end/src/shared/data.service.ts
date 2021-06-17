import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private source = new BehaviorSubject<any>("");
  current = this.source.asObservable();

  constructor() { }

  addData(data: any) {
    this.source.next(data);
  }
}
