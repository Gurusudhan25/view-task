import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridViewComponent } from './components/grid-view/grid-view.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { SpinComponent } from './loaders/spin/spin.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'spin', component: SpinComponent },

  {
    path: 'home',
    component: HomePageComponent,
    children: [
      {
        path: 'gridview',
        component: GridViewComponent,
        title: 'Grid View',
      },
      {
        path: 'listview',
        component: ListViewComponent,
        title: 'List View',
      },
    ],
    data: { animation: 'openClosePage' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
