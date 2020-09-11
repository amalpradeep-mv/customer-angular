export class Customer{
    name:string;
    balance:number;

    constructor(name:string,balance:number){
        this.name=name;
        this.balance=balance;
    }

    getName():string{
        return this.name;
      }
    
      getSalary():number{
        return this.balance;
      }
    
}