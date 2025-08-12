import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LecturerProfilePage } from './lecturer-profile.page';

const routes: Routes = [
  {
    path: '',
    component: LecturerProfilePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LecturerProfilePageRoutingModule {}
