import { OpaqueToken } from '@angular/core';

export let APP_CONFIG = new OpaqueToken('app.config');

export interface IAppConfig {
    categoriesKey: string;
    mockedCategoriesUrl: string;
}

export const appConfig: IAppConfig = {
    categoriesKey: 'ea-categories',
    mockedCategoriesUrl: 'assets/mock-data/mock-data.json'
};
