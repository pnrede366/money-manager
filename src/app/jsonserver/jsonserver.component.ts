import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-jsonserver',
  templateUrl: './jsonserver.component.html',
  styleUrls: ['./jsonserver.component.css']
})
export class JsonserverComponent implements OnInit {
  
  title:string='';
  author:string='';
  titleTemp:string;
  authorTemp:string;
  getData:any;
  myUserNew:any;
  display(){
    // console.log(this.title);
    
    this.myUserNew={
      "title": this.title,
      "author": this.author
    }

    console.log(this.title);
    console.log(this.author);
    this.userDATA.postMyData(this.myUserNew).subscribe((data)=>{
      // this.myUserNew;
      this.myArr=data;
      
      
      
    });
  }
  
  show(){
    this.userDATA.getMyData().subscribe((data)=>{
      console.log(data);
      this.getData=data;
      
      
      
      
    });
  }
  put(){
    this.userDATA.putMyData().subscribe((data)=>{      
      
    });
  }
  update(){
    console.log(this.getData);
    

    
  }
  constructor(private userDATA:UserService) {
  }
  
  
  myArr:any=[];
  ngOnInit(): void {
 
    
  }
}
