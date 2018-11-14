import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent implements OnInit {

  accountNumber: string

  constructor() { }

  ngOnInit() {
    this.accountNumber = "1234567";
  }

}
