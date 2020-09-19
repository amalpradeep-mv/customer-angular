import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { CustomerService } from '../service/customerservice';

@Component({
  selector: 'customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent {

  customerService:CustomerService;

  constructor(customerService:CustomerService) {
    this.customerService=customerService;
   }

  customer:Customer;

   findCustomer(form:any){
     let data=form.value;
     let id=data.customerid;
     this.customer=this.customerService.findCustomerById(id);
   }

  link="https://www.google.com";

  w3Link="https://w3schools.com";
}
