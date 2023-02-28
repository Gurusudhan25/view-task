import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
import { RawDataService } from 'src/app/services/raw-data.service';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.scss'],
})
export class EditMenuComponent implements OnInit {
  public editForm = new FormGroup({
    name: new FormControl(''),
    describe: new FormControl(''),
  });

  constructor(
    public dialogRef: MatDialogRef<EditMenuComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private rawDataService: RawDataService
  ) {}

  ngOnInit(): void {
    this.editForm.setValue({
      name: this.data.name,
      describe: this.data.describe,
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  editData() {
    const obj = {
      name: this.editForm.value.name,
      describe: this.editForm.value.describe,
    };    
    this.rawDataService.patchUserInfo(obj , this.data.id);
  }
}
