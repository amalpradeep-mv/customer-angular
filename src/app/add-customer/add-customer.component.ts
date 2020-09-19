import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { CustomerService } from '../service/customerservice';

@Component({
  selector: 'add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {

  customerService:CustomerService;

  constructor(customerService:CustomerService){
    this.customerService=customerService;
  }
  customer:Customer;
  
  addCustomer(form:any){
    let data=form.value;
    let name=data.name;
    let balance=data.balance;
   this.customer=new Customer(-1,name,balance);
   this.customerService.addCustomer(this.customer);
  }

}
