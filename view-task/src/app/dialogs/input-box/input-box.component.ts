import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faker } from '@faker-js/faker';
import { IUser } from 'src/app/components/grid-view/grid-view.component';
import { RawDataService } from 'src/app/services/raw-data.service';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.scss'],
})
export class InputBoxComponent implements OnInit {
  public formDetails = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(10) ]),
    describe: new FormControl('', [Validators.required]),
  });

  constructor(
    public dialogRef: MatDialogRef<InputBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string, describe: string , id: string},
    private rawDataService: RawDataService
  ) {}

  ngOnInit() {
    this.formDetails.patchValue(this.data);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  addUser() {
    const picture = faker.image.avatar();
    const obj = {
      name: this.formDetails.get('name')?.value,
      picture,
      describe: this.formDetails.get('describe')?.value,
    };
    this.rawDataService.addUserInfo(obj);
  }

  editUser() {
    const obj = {
      name: this.formDetails.value.name,
      describe: this.formDetails.value.describe,
    };
    this.rawDataService.patchUserInfo(obj, this.data.id);
  }
}
