import { HttpClient } from '@angular/common/http'
import { NgModule } from '@angular/core'

import { CommonModule } from '@angular/common'


import { HeaderComponent } from './components/header/header.component'
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'


import { HmctsModule } from '../hmcts/hmcts.module'
import { CaseService } from './services/case.service'

import { HttpClientModule } from '@angular/common/http'
import { AccountBarComponent } from './components/accountbar/accountbar.component';






@NgModule({
    imports: [CommonModule, RouterModule, ReactiveFormsModule, HmctsModule, HttpClientModule,],
    exports: [AccountBarComponent, HeaderComponent],
    declarations: [AccountBarComponent, HeaderComponent,],
    providers: [CaseService]
})
export class DomainModule { }
