import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RawDataService } from 'src/app/services/raw-data.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
})
export class ListViewComponent implements OnInit {
  public isLoading = false;
  public list: any;
  displayedColumns: string[] = ['name', 'Description', 'menubar'];

  constructor(
    private rawDataService: RawDataService,
    private changeDetect: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.rawDataService.getUserInfo();
    this.rawDataService.users$.subscribe((val: any) => {
      this.list = val;
      this.isLoading = false;
    });
  }

  ngOnChanges() {
    this.changeDetect.detectChanges();
  }
}
