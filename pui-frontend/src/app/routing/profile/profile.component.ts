import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
    profile: any;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.profile = this.route.snapshot.data['profileData'];
        console.log(this.profile);
    }
}
