import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface IUserDetails {
  id: string;
  name: string;
  describe: string;
  picture: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public url: string = 'https://63fa2035473885d837d8e04b.mockapi.io/listdata';
  constructor(private _http: HttpClient) {}

  getData() {
    return this._http.get(this.url);
  }

  addData(obj: IUserDetails) {
    return this._http.post(this.url, obj);
  }

  editData(obj: IUserDetails, id: string) {
    return this._http.put(`${this.url}/${id}`, obj);
  }

  deleteData(id: string) {
    console.log(id);

    return this._http.delete(`${this.url}/${id}`);
  }
}
