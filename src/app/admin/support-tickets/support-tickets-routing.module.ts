import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupportTicketsPage } from './support-tickets.page';

const routes: Routes = [
  {
    path: '',
    component: SupportTicketsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupportTicketsPageRoutingModule {}
