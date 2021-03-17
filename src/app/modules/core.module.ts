import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app-routing.module';
import { PlainLayoutComponent } from '@components/layouts/plain/plain.component';
import MainNavLayoutComponent from '@components/layouts/main-nav/index.component';

@NgModule({
  declarations: [PlainLayoutComponent, MainNavLayoutComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [AppRoutingModule],
  providers: []
})
export class CoreModule { }
