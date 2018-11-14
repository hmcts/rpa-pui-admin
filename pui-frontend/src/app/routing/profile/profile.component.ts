import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
    profile: any;
    fields: any[] = [];

    dataMap = {
        forename: 'First name',
        surname: 'Last name',
        email: 'Email',
    };

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.profile = this.route.snapshot.data['profileData'];
        Object.keys(this.dataMap).forEach(key => {
            const obj = { label: this.dataMap[key], value: this.profile[key] };
            console.log(obj);
            this.fields.push(obj);
        });
    }
}
