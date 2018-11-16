import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailbarService {

  authChange = new Subject<string>();
  constructor() { }




  updateAccountDetail(account: string) {
    this.authChange.next(account);
  }

}
