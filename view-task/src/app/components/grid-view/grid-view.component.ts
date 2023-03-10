import { Component, OnInit } from '@angular/core';
import { RawDataService } from 'src/app/services/raw-data.service';

export interface IUser {
  id: string;
  name: string;
  picture: string;
  describe: string;
}

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss'],
})
export class GridViewComponent implements OnInit {
  public userData: IUser[] = [];
  public isLoading = false;

  constructor(private rawDataService: RawDataService) {}

  ngOnInit() {
    this.isLoading = false;
    this.rawDataService.getUserInfo();
    this.rawDataService.users$.subscribe((val: IUser[]) => {
      this.userData = val;
    });
    setInterval(() => {
      this.isLoading = false;
    }, 700);
  }
  
}
