import { Injectable } from '@angular/core';
import 'rxjs/operators/map';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { ProfileService } from '../../domain/services/profile.service';

@Injectable()
export class ProfileResolve implements Resolve<any> {
    constructor(private profileService: ProfileService) {}

    resolve(route: ActivatedRouteSnapshot) {
        return this.profileService.fetch();
    }
}
