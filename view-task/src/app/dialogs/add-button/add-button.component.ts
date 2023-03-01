import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InputBoxComponent } from '../input-box/input-box.component';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss'],
})
export class AddButtonComponent {
  name: string = '';
  describe: string = '';

  constructor(public dialog: MatDialog) {}

  openAddDialog(): void {
    const dialogRef = this.dialog.open(InputBoxComponent);
  }
}
