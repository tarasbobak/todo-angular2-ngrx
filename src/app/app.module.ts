import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation';
import { ExpandDirective } from './navigation';
import { AppRoutingModule } from './app-routing.module';
import { AppService } from './app.service';

import '../styles/styles.scss';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    ExpandDirective,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [AppService]
})

export class AppModule { }
