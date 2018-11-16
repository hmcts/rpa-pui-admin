import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DetailbarService } from 'src/app/domain/services/detailbar.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent implements OnInit {

  accountNumber: string
  selection: string = 'summary';
  section = {}

  constructor(public router: Router, private route: ActivatedRoute, private detailbarService: DetailbarService) {
    this.route.params.subscribe(params => {

      this.selection = params.paymenttype
      this.accountNumber = params.account
      console.log('params', params)
    });
  }

  ngOnInit() {

    if (this.accountNumber)
      this.detailbarService.updateAccountDetail(this.accountNumber)

  }

}
