import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassViewPage } from './class-view.page';

const routes: Routes = [
  {
    path: '',
    component: ClassViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassViewPageRoutingModule {}
