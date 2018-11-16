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

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.fields = this.route.snapshot.data['profileData'];
    }
}
