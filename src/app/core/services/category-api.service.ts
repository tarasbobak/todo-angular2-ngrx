import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { GenericHttpService } from './generic-http.service';
import { GenericLocalStorageService } from './generic-localStorage.service';
import { APP_CONFIG, IAppConfig } from '../config';
import { Category } from '../models';

@Injectable()
export class CategoryApiService {
  constructor (
      @Inject(APP_CONFIG) private config: IAppConfig,
      private httpService: GenericHttpService,
      private localStorageService: GenericLocalStorageService
  ) {}

  public getCategories(): Category[] {
    return this.localStorageService.getItem(this.config.categoriesKey);
  }

  public saveCategories(data: Category[]): void {
    this.localStorageService.setItem(this.config.categoriesKey, data);
  }

  public fetchCategories(): Observable<Category[]> {
    return this.httpService.get(this.config.mockedCategoriesUrl);
  }
}
