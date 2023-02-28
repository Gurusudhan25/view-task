import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
import { faker } from '@faker-js/faker';
import { RawDataService } from 'src/app/services/raw-data.service';

@Component({
  selector: 'app-add-button-input',
  templateUrl: './add-button-input.component.html',
  styleUrls: ['./add-button-input.component.scss'],
})
export class AddButtonInputComponent {
  public formDetails = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    describe: new FormControl('', [Validators.required]),
  });

  constructor(
    public dialogRef: MatDialogRef<AddButtonInputComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private rawDataService: RawDataService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  toService() {
    const picture = faker.image.avatar();
    const obj = {
      name: this.formDetails.get('name')?.value,
      picture,
      describe: this.formDetails.get('describe')?.value,
    };
    this.rawDataService.addUserInfo(obj);
  }
}

export interface DialogData {
  name: string;
  describe: string;
}
