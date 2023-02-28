import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddButtonInputComponent } from '../add-button-input/add-button-input.component';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss'],
})
export class AddButtonComponent {
  name: string = '';
  describe: string = '';

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddButtonInputComponent, {
      data: { name: this.name, describe: this.describe },
    });
  }

}
