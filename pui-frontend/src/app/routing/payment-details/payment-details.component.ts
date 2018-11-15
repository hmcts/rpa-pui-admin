import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent implements OnInit {

  accountNumber: string
  selection: string = 'summary';
  section = {}

  constructor(public router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.selection = params.paymenttype || null
      console.log('params', params)
    });
  }

  ngOnInit() {
    this.accountNumber = "1234567";
  }

}
