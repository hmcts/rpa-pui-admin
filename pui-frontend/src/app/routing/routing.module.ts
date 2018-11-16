import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HmctsModule } from '../hmcts/hmcts.module';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { AuthService } from '../auth/auth.service';

import { DomainModule } from '../domain/domain.module';
import { ProfileResolve } from './resolve/profile.resolve';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ProfileComponent } from './profile/profile.component';
import { OrganisationComponent } from './organisation/organisation.component';
import { UsersComponent } from './users/users.component';
import { PaymentsComponent } from './payments/payments.component';
import { ProfileService } from '../domain/services/profile.service';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';

const routes: Routes = [
    {
        path: '',
        resolve: {
            profileData: ProfileResolve,
        },
        component: ProfileComponent,
        canActivate: [AuthService],
        data: { roles: ['caseworker-probatex'] },
    },

    {
        path: 'organisation',
        component: OrganisationComponent,
        canActivate: [AuthService],
    },
    {
        path: 'users',
        component: UsersComponent,
        canActivate: [AuthService],
    },
    {
        path: 'payments',
        component: PaymentsComponent,
        canActivate: [AuthService],
    },
    {
        path: 'paymentdetails/:paymenttype',
        children: [

            {
                path: '',
                component: PaymentDetailsComponent
            }
        ]
    },
    {
        path: 'paymentdetails/:paymenttype/:account',
        children: [

            {
                path: '',
                component: PaymentDetailsComponent
            }
        ]
    }

];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {
            scrollPositionRestoration: 'enabled',
            anchorScrolling: 'enabled',
        }),
        RouterModule,
        SharedModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HmctsModule,
        DomainModule,
        HttpModule,
    ],
    declarations: [ProfileComponent, OrganisationComponent, UsersComponent, PaymentsComponent, PaymentDetailsComponent],
    providers: [ProfileResolve, ProfileService],
    exports: [RouterModule],
})
export class RoutingModule { }
