import { Injectable } from '@angular/core';

import { CategoryApiService } from '../services';

@Injectable()
export class StoreService {
  constructor(private categoryApiService: CategoryApiService){}

  public getInitialState(): Object {
    return this.categoryApiService.getCategories();
  }
}
