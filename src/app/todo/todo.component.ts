import { Component, OnInit } from '@angular/core';
import { TodoserviceService } from '../service/todoservice.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  taskName:string;
  taskDescr:string;
  priority:string
  todoTask:any;
  todoObj:any;
  index:number;  
  showAdd:boolean=true
  todoObjTemp:any
  singleTask:any;

  add(){
console.log(this.priority);

  }

  getData(){
    this.userData.getMyData().subscribe((data)=>{
      console.log(data)
      this.todoTask=data;
    });
  }
  postData(){
    this.todoObj={
      'task':this.taskName,
      'descr':this.taskDescr,
      'priority':this.priority
    }
    console.log(this.todoObj);
    
    this.userData.postMyData(this.todoObj).subscribe((data)=>{
      console.log(data)
    });
  }
  updateTask(i:number){
    console.log(i+"index");

    this.userData.singleUserData(i).subscribe((data)=>{
      this.singleTask=data;
      console.log(this.singleTask);
      
      this.index=i
      this.taskName=this.singleTask.task
      this.taskDescr=this.singleTask.descr
      this.priority=this.singleTask.priority
      this.showAdd=false

    });
    console.log(this.singleTask);
  }
  updateList(){
    this.todoObjTemp={
      'task':this.taskName,
      'descr':this.taskDescr,
      'priority':this.priority
    }
    console.log(this.todoObjTemp.task+"onj")
    console.log(this.index);
    ;
    console.log(this.todoTask);
    
    this.userData.putMyData(this.todoObjTemp,this.index).subscribe((data)=>{
      console.log(data)

    });

  }

  deleteUser(i:number){
    this.userData.deleteeUserData(i).subscribe((data)=>{
      console.log(data)

    });
  }
  constructor( private userData:TodoserviceService) { }

  ngOnInit(): void {
  }

}
