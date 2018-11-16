import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailbarService {

  accountChange = new Subject<string>();
  constructor() { }




  updateAccountDetail(account: string) {
    this.accountChange.next(account);
  }

}
