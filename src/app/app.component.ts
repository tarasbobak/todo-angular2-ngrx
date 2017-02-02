import { Component } from '@angular/core';

import { AppService } from './app.service';

@Component({
  selector: 'app',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html'
})

export class AppComponent {
  constructor(private appService: AppService) {}
}
