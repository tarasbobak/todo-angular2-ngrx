import { NgModule } from '@angular/core';

import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  imports: [
    ProfileRoutingModule
  ],
  declarations: [
    ProfileComponent
  ],
  exports: [
    ProfileComponent
  ],
  providers: []
})

export class ProfileModule { }
