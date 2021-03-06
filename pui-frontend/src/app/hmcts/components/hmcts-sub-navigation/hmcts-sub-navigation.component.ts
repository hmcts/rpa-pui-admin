import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-hmcts-sub-navigation',
    templateUrl: './hmcts-sub-navigation.component.html',
    styleUrls: ['./hmcts-sub-navigation.component.scss']
})
export class HmctsSubNavigationComponent {

    @Input() label = 'Sub navigation';
    @Input() items = [
        {
            text: 'Summary',
            href: '/paymentdetails/summary',
            active: true
        }, {
            text: 'Transactions',
            href: '/paymentdetails/transactions'
        }
    ];

    constructor() { }

}
