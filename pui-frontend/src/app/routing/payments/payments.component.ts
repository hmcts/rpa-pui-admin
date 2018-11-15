import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {


  constructor(authservice: AuthService) {

    console.log('authsv', authservice.getUser())
  }

  ngOnInit() {


  }

}
