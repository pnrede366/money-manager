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
    this.updateBal();
 
   }

   addExp(){
     this.expenseAdded=true;
     this.incomeTemp=this.income;
     this.expenseTemp=this.expense;
     this.totalTemp=this.total;
     this.descExpTemp=this.descExp;

     if(this.expenseAdded){
     this.moneyExp.push({"exp":this.expenseTemp,"expDesc":this.descExpTemp,"date":this.dateExpTemp})
     
     }
     this.updateBal();


   }
   expInd=0;

   expUpdate(i:number){
     this.expInd=i;
    this.expense=this.moneyExp[i].exp;
    this.descExp=this.moneyExp[i].expDesc;
    this.dateExp=this.moneyExp[i].date;
    this.showExp=true;
    this.updateBal();
   
  }
  deleteExp(i:number){
    console.log("click");
    
    console.log(i +"index");
    

    this.moneyExp.splice(i,1);
    this.updateBal();

  }
  deleteInc(i:number){
    console.log("click");
    
    console.log(i +"index");
    

    this.moneyInc.splice(i,1);
    this.updateBal();

  }
  incUpdate(i:number){
    this.incInd=i;
    this.dateInc=this.moneyInc[i].date;
    this.income=this.moneyInc[i].inc;
    this.incDesc=this.moneyInc[i].incDesc;
    this.showAdd=true;
    this.updateBal();
   
    // this.moneyInc.push({"inc":this.incomeTemp,"incDesc":this.incDescTemp,"date":this.dateIncTemp})

    
    
  }
  newIncUpdate(){
    // console.log(this.incInd);
    this.moneyInc[this.incInd].inc=this.income;
    this.moneyInc[this.incInd].date=this.dateInc;
    this.moneyInc[this.incInd].incDesc=this.incDesc;
    this.showAdd=false;
    this.updateBal();

  
  }
  newExpUpdate(){
    console.log(this.expInd);
    
   this.moneyExp[this.expInd].exp=this.expense
   this.moneyExp[this.expInd].expDesc=this.descExp
   this.moneyExp[this.expInd].date=this.dateExp
   this.showExp=false;


  //  this.moneyExp.push({"exp":this.expenseTemp,"expDesc":this.descExpTemp,"date":this.dateExpTemp})
  this.updateBal();
  }
  totalBal:number=0;
  totalExpNew:number=0;
  totalIncNew:number=0;
  updateBal(){
    this.totalIncNew=0
    this.totalExpNew=0
    this.totalBal=0
    for (let index = 0; index < this.moneyInc.length; index++) {
              this.totalIncNew+=this.moneyInc[index].inc
      
    }
    for (let index = 0; index < this.moneyExp.length; index++) {
      this.totalExpNew+=this.moneyExp[index].exp

    }
    this.totalBal=this.totalIncNew-this.totalExpNew;
    // console.clear();
    console.log(this.moneyInc.length+"exp"+this.moneyExp.length+""+this.moneyExp+"mone"+this.moneyInc);
    
console.log("total bal"+this.totalBal+"total exp"+this.totalExpNew+"total inc"+this.totalIncNew);
    

  }
  constructor() { }


  ngOnInit(): void {
  }

}
