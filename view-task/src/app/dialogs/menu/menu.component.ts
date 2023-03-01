import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IUser } from 'src/app/components/grid-view/grid-view.component';
import { RawDataService } from 'src/app/services/raw-data.service';
import { DeleteMenuComponent } from '../delete-menu/delete-menu.component';
import { InputBoxComponent } from '../input-box/input-box.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input() childInput: string = '';

  constructor(
    public dialog: MatDialog,
    private rawDataService: RawDataService
  ) {}

  openEditDialog(): void {
    const availableUsers = this.rawDataService.users.getValue();
    let currentUser: IUser[] = availableUsers.filter(
      (user: { name: string; describe: string; id: string }) =>
        user.id === this.childInput
    );
    const dialogRef = this.dialog.open(InputBoxComponent, {
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
