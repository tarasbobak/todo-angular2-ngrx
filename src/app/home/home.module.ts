import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HOME_COMPONENTS } from './';
import { HomeComponent, HomeRoutingModule, HomeService,
    TaskModifyResolve } from './';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule
  ],
  declarations: [
    HOME_COMPONENTS
  ],
  exports: [
    HomeComponent
  ],
  providers: [
    TaskModifyResolve,
    HomeService
  ]
})

export class HomeModule { }
