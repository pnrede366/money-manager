import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taskmoneymanger',
  templateUrl: './taskmoneymanger.component.html',
  styleUrls: ['./taskmoneymanger.component.css']
})
export class TaskmoneymangerComponent implements OnInit {

  moneyInc:any=[];
  moneyExp:any=[];
  income:number=0;
  expense:number=0;
  total:number=0;
  incomeTemp:number=0;
 expenseTemp:number=0;
   totalTemp:number=0;
  //  dateInc:Date="";
  //  dateExp:Date="";
  totalInc:number=0;
  remain:number=0;
  index:number=0;
  totalExp:number=0;
  incDesc:string="";
  descExp:string="";
  incDescTemp:string="";
  descExpTemp:string="";
  incomeAdded:boolean=false;
  expenseAdded:boolean=false;

  showAdd:boolean=false;
  showExp:boolean=false;
  dateInc:number=0;
  dateExp:number=0;
  dateIncTemp:number=0;
  dateExpTemp:number=0;
  incInd:number=0;
  addIncome(){
  this.incomeAdded=true;
  this.dateIncTemp=this.dateInc;
  this.dateExpTemp=this.dateExp;
    this.incomeTemp=this.income;
    this.expenseTemp=this.expense;
    this.totalTemp=this.total;
    this.incDescTemp=this.incDesc;
    this.descExpTemp= this.descExp;
    this.descExpTemp=  this.descExp;
    if(this.incomeAdded){
    this.moneyInc.push({"inc":this.incomeTemp,"incDesc":this.incDescTemp,"date":this.dateIncTemp})
 
    }
    this.totalInc+=this.incomeTemp;
    
    this.remain=this.totalInc-this.totalExp;
    
    console.log(this.moneyInc);
   }

   addExp(){
     this.expenseAdded=true;
     this.incomeTemp=this.income;
     this.expenseTemp=this.expense;
     this.totalTemp=this.total;
     this.descExpTemp=this.descExp;

     this.totalExp+=this.expenseTemp;
     if(this.expenseAdded){
     this.moneyExp.push({"exp":this.expenseTemp,"expDesc":this.descExpTemp,"date":this.dateExpTemp})
     
     }
     this.remain=this.totalInc-this.totalExp;
     console.log(this.moneyInc);

    //  this.remain=this.incomeTemp-this.expenseTemp;

   }
   expInd=0;

   expUpdate(i:number){
     this.expInd=i;
    this.expense=this.moneyExp[i].exp;
    this.descExp=this.moneyExp[i].expDesc;
    this.dateExp=this.moneyExp[i].date;
    this.showExp=true;
   
  }
  deleteExp(i:number){
    this.moneyExp.splice(i,1);
  }
  incUpdate(i:number){
    this.incInd=i;
    this.dateInc=this.moneyInc[i].date;
    this.income=this.moneyInc[i].inc;
    this.incDesc=this.moneyInc[i].incDesc;
    this.showAdd=true;
   
    // this.moneyInc.push({"inc":this.incomeTemp,"incDesc":this.incDescTemp,"date":this.dateIncTemp})

    
    
  }
  newIncUpdate(){
    // console.log(this.incInd);
    this.moneyInc[this.incInd].inc=this.income;
    this.moneyInc[this.incInd].date=this.dateInc;
    this.moneyInc[this.incInd].incDesc=this.incDesc;
    this.showAdd=false;

  
  }
  newExpUpdate(){
    console.log(this.expInd);
    
   this.moneyExp[this.expInd].exp=this.expense
   this.moneyExp[this.expInd].expDesc=this.descExp
   this.moneyExp[this.expInd].date=this.dateExp
   this.showExp=false;


  //  this.moneyExp.push({"exp":this.expenseTemp,"expDesc":this.descExpTemp,"date":this.dateExpTemp})

  }
  constructor() { }


  ngOnInit(): void {
  }

}
