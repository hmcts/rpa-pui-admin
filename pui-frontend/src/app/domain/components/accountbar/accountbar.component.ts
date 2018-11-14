import { Component, Input, OnInit } from '@angular/core';
import 'rxjs/add/operator/filter';

@Component({
    selector: 'app-accountbar',
    templateUrl: './accountbar.component.html',
    styleUrls: ['./accountbar.component.scss']
})
export class AccountBarComponent {

    @Input() account: any;

    constructor() { }

}
