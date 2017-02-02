import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { HomeService } from '../../home.service';

@Injectable()
export class TaskModifyResolve implements Resolve<any> {
  constructor(private homeService: HomeService) {}

  public resolve(route: ActivatedRouteSnapshot) {
    const selCategoryId = parseInt(route.parent.params['id'], 10);

    return this.homeService.getSelectedCategory$(selCategoryId).first();
  }
}
