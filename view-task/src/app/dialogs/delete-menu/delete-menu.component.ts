import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RawDataService } from 'src/app/services/raw-data.service';

@Component({
  selector: 'app-delete-menu',
  templateUrl: './delete-menu.component.html',
  styleUrls: ['./delete-menu.component.scss'],
})
export class DeleteMenuComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteMenuComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {id:string},
    private rawDataService: RawDataService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteUser(){
    this.rawDataService.deleteUserInfo(this.data.id)
  }
}
