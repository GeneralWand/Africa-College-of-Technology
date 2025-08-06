import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupportTicketsPageRoutingModule } from './support-tickets-routing.module';

import { SupportTicketsPage } from './support-tickets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupportTicketsPageRoutingModule
  ],
  declarations: [SupportTicketsPage]
})
export class SupportTicketsPageModule {}
