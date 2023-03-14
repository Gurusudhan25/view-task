import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RawDataService } from 'src/app/services/raw-data.service';
import { IUser } from '../grid-view/grid-view.component';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
})
export class ListViewComponent implements OnInit {
  public isLoading = false;
  public userData = new MatTableDataSource();
  displayedColumns: string[] = ['name', 'Description', 'menubar'];

  constructor(private rawDataService: RawDataService) {}

  ngOnInit() {
    this.isLoading = false;
    this.rawDataService.getUserInfo();
    this.rawDataService.users$.subscribe((val: IUser[]) => {
      this.userData.data = val;
    });
    setInterval(() => {
      this.isLoading = false;
    }, 700);
  }
}
