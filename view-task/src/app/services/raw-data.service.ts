import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RawDataService {
  public users: BehaviorSubject<any> = new BehaviorSubject(null);
  users$: Observable<any> = this.users.asObservable();

  constructor(private _data: DataService) {}

  getUserInfo() {
    this._data
      .getData()
      .pipe(tap((users) => this.users.next(users)))
      .subscribe();
  }

  addUserInfo(userInfo: any) {
    this._data
      .addData(userInfo)
      .pipe(
        tap((user) => {
          const availableUsers = this.users.getValue();
          availableUsers.push(user);
          this.users.next(availableUsers);
        })
      )
      .subscribe();
  }

  patchUserInfo(userInfo: any, id: string) {
    this._data
      .editData(userInfo, id)
      .pipe(
        tap((user: any) => {
          const availableUsers = this.users.getValue();
          const index = availableUsers.findIndex(
            (val: any) => val.id === user.id
          );
          availableUsers[index] = user;
          this.users.next(availableUsers);
        })
      )
      .subscribe();
  }

  deleteUserInfo(id: string) {
    this._data
      .deleteData(id)
      .pipe(
        tap((user) => {
          let availableUsers = this.users.getValue();
          availableUsers = availableUsers.filter((val: any) => val.id !== id);
          this.users.next(availableUsers);
        })
      )
      .subscribe();
  }
}
