import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/add/operator/filter';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { DetailbarService } from '../../services/detailbar.service';

@Component({
    selector: 'app-accountbar',
    templateUrl: './accountbar.component.html',
    styleUrls: ['./accountbar.component.scss']
})
export class AccountBarComponent implements OnInit {

    @Input() account: any
    isVisible: Boolean = false
    myObserver = null
    accountLabel: string
    accountSubscription: Subscription;

    constructor(private router: Router, private detailbarService: DetailbarService) {


    }


    ngOnInit() {
        this.router.events.subscribe((route: any) => {
            if (route.url) this.isVisible = route.url.includes('paymentdetails');
        });


        this.accountSubscription = this.detailbarService.authChange.subscribe(authStatus => {
            this.accountLabel = authStatus;
        });
    }



}
