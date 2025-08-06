import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResourceUploadPage } from './resource-upload.page';

const routes: Routes = [
  {
    path: '',
    component: ResourceUploadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResourceUploadPageRoutingModule {}
