import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  constructor(private http:HttpClient) {

   }
   getData(city:string){
     return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=d2111b21402c817410ebbac49f76099c`);
   }
}
