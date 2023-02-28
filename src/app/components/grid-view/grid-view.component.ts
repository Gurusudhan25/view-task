import { Component, OnInit, Inject, OnChanges } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { RawDataService } from 'src/app/services/raw-data.service';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss'],
})
export class GridViewComponent implements OnInit  {
  public list: any;
  public isLoading = false;

  constructor(
    private data: DataService,
    private rawDataService: RawDataService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.rawDataService.getUserInfo();
    this.rawDataService.users$.subscribe((val: any) => {
      this.list = val;
      this.isLoading = false;
    });
  }


}