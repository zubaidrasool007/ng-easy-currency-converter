import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getcurrencyData(data = "PKR"){
    return this.http.get<any>("https://v6.exchangerate-api.com/v6/af1b8c6ec427896c2079b107/latest/"+data)
  }

}
