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

    // {
    //     path: 'jurisdiction/:jur/casetype/:casetype/viewcase/:case_id',
    //     resolve: {
    //         caseData: CaseResolve
    //     },
    //     children: [
    //         {
    //             path: ':section',
    //             component: ViewCaseComponent
    //         },
    //         {
    //             path: ':section/:section_item_id',
    //             component: ViewCaseComponent
    //         },
    //         {
    //             path: '',
    //             component: ViewCaseComponent
    //         }
    //     ]
    // },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {
            scrollPositionRestoration: 'enabled',
            anchorScrolling: 'enabled',
        }),
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HmctsModule,
        DomainModule,
        HttpModule,
    ],
    declarations: [ProfileComponent, OrganisationComponent, UsersComponent, PaymentsComponent],
    providers: [ProfileResolve, ProfileService],
    exports: [RouterModule],
})
export class RoutingModule {}
