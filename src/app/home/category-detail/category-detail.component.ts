import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Category } from '../../core/models';
import { HomeService } from '../home.service';
import { slideRouteAnimation } from './slide-animation';

@Component({
  animations: [slideRouteAnimation],
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})

export class CategoryDetailComponent implements OnInit {
  @HostBinding('@routeAnimation') public routeAnimation = true;
  public selectedCategory: Category;

  constructor (
    private route: ActivatedRoute,
    private homeService: HomeService
  ) {}

  public ngOnInit() {
    this.route.params
      .subscribe((param) => {
        let categoryId = parseInt(param['id'], 10);

        this.homeService.getSelectedCategory$(categoryId)
          .subscribe((category: Category) => {
            this.selectedCategory = category;
          });
      });
  }
}
