import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { HomeService } from './home.service';
import { Category } from '../core/models';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  public categories$: Observable<Category[]>;
  public detailViewActive: boolean = false;

  constructor(
    private router: Router,
    private homeService: HomeService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.detailViewActive = this.homeService.isDetailView(event.url);
      }
    });
  }

  public ngOnInit() {
    this.categories$ = this.homeService.getCategories$();
  }
}
