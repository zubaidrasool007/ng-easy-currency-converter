import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, retry } from 'rxjs';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'currency-converter';
  activeItemIndex:any
  targetCurrency:any;
  getCurrencies:any[]=[];
 
 

  ngOnInit(): void {
   
  }
  targetvalue(item:any){

  }
}
