import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpData:HttpClient) { 

  }

  postMyData(newObj:any){
    return this.httpData.post("http://localhost:3000/products",newObj);
  }
  getMyData(){
    return this.httpData.get("http://localhost:3000/products");
  }
  putMyData(){
    return this.httpData.put("http://localhost:3000/products/1",{title: "mi 7"});
  }
}
