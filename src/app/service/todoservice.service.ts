import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {

  constructor(private httpData:HttpClient) { }

  getMyData(){
    return this.httpData.get("http://localhost:3000/todo");
  }
  postMyData(postObj:any){
    return this.httpData.post("http://localhost:3000/todo",postObj);
  }
  putMyData(putObj:any,ind:number){
    console.clear()
    console.log(putObj+"put")
    return this.httpData.put(`http://localhost:3000/todo/${ind}`,putObj);
  }
  singleUserData(i:number){
    console.log(i+"sdadas");
    
    return this.httpData.get(`http://localhost:3000/todo/${i}`);
  }
  deleteeUserData(i:number){
    
    return this.httpData.delete(`http://localhost:3000/todo/${i}`);
  }
}
