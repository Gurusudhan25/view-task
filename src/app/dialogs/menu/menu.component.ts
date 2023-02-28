import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RawDataService } from 'src/app/services/raw-data.service';
import { DeleteMenuComponent } from '../delete-menu/delete-menu.component';
import { EditMenuComponent } from '../edit-menu/edit-menu.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input() childInput: any;

  constructor(
    public dialog: MatDialog,
    private rawDataService: RawDataService
  ) {}

  openEditDialog(): void {
    const availableUsers = this.rawDataService.users.getValue();
    let currentUser: any = availableUsers.filter(
      (user: any) => user.id === this.childInput
    );
    const dialogRef = this.dialog.open(EditMenuComponent, {
      data: {
        name: currentUser[0].name,
        describe: currentUser[0].describe,
        id: currentUser[0].id,
      },
    });
  }

  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteMenuComponent, {
      data: { id: this.childInput },
    });
  }
}
