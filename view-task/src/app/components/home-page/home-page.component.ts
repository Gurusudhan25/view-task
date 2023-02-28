import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  isToggleOn = true;
  constructor(private _router: Router) {}
  onToggle() {
    if (this.isToggleOn) {
      this._router.navigate(['home/gridview']);
      this.isToggleOn = false;
    } else {
      this._router.navigate(['home/listview']);
      this.isToggleOn = true;
    }
  }
  changeToggle() {
    this.isToggleOn = !this.isToggleOn;
  }
}
