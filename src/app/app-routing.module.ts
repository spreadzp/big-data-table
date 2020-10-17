import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainTableComponent } from './components/main-table/main-table.component';
import { TotalTableComponent } from './components/total-table/total-table.component';

const routes: Routes = [
  {
    path: '',
    component: MainTableComponent

  },
  {
    path: 'total',
    component: TotalTableComponent

  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
