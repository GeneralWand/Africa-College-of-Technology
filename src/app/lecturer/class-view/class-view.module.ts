import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClassViewPageRoutingModule } from './class-view-routing.module';

import { ClassViewPage } from './class-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClassViewPageRoutingModule
  ],
  declarations: [ClassViewPage]
})
export class ClassViewPageModule {}
