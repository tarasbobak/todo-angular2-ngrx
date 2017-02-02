import { CategoryApiService } from './category-api.service';
import { GenericHttpService } from './generic-http.service';
import { GenericLocalStorageService } from './generic-localStorage.service';

export * from './category-api.service';
export * from './generic-http.service';
export * from './generic-localStorage.service';

export const appServices = [
  CategoryApiService,
  GenericHttpService,
  GenericLocalStorageService
];
