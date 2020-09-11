import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';

@Component({
  selector: 'customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {

  constructor() { }

  customers:Customer[]=[
    new Customer("Sam",5000),
    new Customer("Krish",10000),
    new Customer("Abdul",8000)
  ];
}
