import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../model/customer';
import { CustomerService } from '../service/customerservice';

@Component({
  selector: 'addcustomer-codedriven',
  templateUrl: './addcustomer-codedriven.component.html',
  styleUrls: ['./addcustomer-codedriven.component.css']
})
export class AddcustomerCodedrivenComponent implements OnInit {

  customerForm:FormGroup;

  usernameCtrl:FormControl;

  balanceCtrl:FormControl;

  customer:Customer;

  constructor(private customerService:CustomerService, fb:FormBuilder) {
    this.usernameCtrl=fb.control('',[Validators.minLength(3),Validators.required]);
    this.balanceCtrl=fb.control('',[Validators.required]);

    this.customerForm=fb.group({
      username:this.usernameCtrl,
      balance:this.balanceCtrl
    });
   }

  ngOnInit(): void {
  }

  addCustomer(){
    let username:string=this.usernameCtrl.value;
    let balance:number=this.balanceCtrl.value;
    this.customer=new Customer(-1,username,balance);
    this.customerService.addCustomer(this.customer);
  }
}
