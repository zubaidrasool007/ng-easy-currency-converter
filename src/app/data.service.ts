import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getcurrencyData(){
     return this.http.get<any>("https://v6.exchangerate-api.com/v6/65e12d857703c1673a8e23dc/latest/PKR")
  }

}
