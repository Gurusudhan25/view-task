import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { GridViewComponent } from './components/grid-view/grid-view.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { AddButtonComponent } from './dialogs/add-button/add-button.component';
import { AddButtonInputComponent } from './dialogs/add-button-input/add-button-input.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MenuComponent } from './dialogs/menu/menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SpinComponent } from './loaders/spin/spin.component';
import { EditMenuComponent } from './dialogs/edit-menu/edit-menu.component';
import { DeleteMenuComponent } from './dialogs/delete-menu/delete-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    GridViewComponent,
    ListViewComponent,
    AddButtonComponent,
    AddButtonInputComponent,
    MenuComponent,
    SpinComponent,
    EditMenuComponent,
    DeleteMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatMenuModule,
    MatSidenavModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
