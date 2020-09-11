import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';

@Component({
  selector: 'customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent {

  constructor() { }

  customer:Customer=new Customer("john",5000);

  link="https://www.google.com";

  w3Link="https://w3schools.com";
}
