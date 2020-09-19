import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';

@Injectable()
export class CustomerService{

    customers:Customer[]=[];

    generatedId:number=0;

    generateId():number{
        this.generatedId++;
        return this.generatedId;
    }

    addCustomer(customer:Customer){
        let Id=this.generateId();
        customer.id=Id;
        this.customers.push(customer);
    }

    allCustomers():Customer[]{
        return this.customers;
    }

    findCustomerById(id:number):Customer{
        for(let customer of this.customers){
            if(customer.id===id){
                return customer;
            }
        }
        return null;
    }
}