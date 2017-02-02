import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';

import { CategoryApiService } from '../core/services';
import { AppState } from '../core/store';
import { Category } from '../core/models';

@Injectable()
export class HomeService {
  private categories$: Observable<Category[]> = this.store.select('categories');

  constructor(
    private store: Store<AppState>,
    private categoryApiService: CategoryApiService
  ) {
    // TODO: Needs rethinking when and where we should interact with the db.
    this.categories$.subscribe((categories: Category[]) => {
      this.categoryApiService.saveCategories(categories);
    });
  }

  public getCategories$(): Observable<Category[]> {
    return this.categories$;
  }

  public getSelectedCategory$(id: number): Observable<Category> {
    return this.categories$
      .flatMap((categories: Category[]) => {
        return Observable.from(categories);
      })
      .filter((category: Category) => {
        return category.id === id;
      });
  }

  public isDetailView(url: string): boolean {
    const detailViewRegExp = /^\/home\/category\/\d+/;

    return detailViewRegExp.test(url);
  }

  public addTask(categoryId: number, taskDescr: string) {
    this.store.dispatch({type: 'ADD_TASK', payload: {
      categoryId,
      taskDescr
    }});
  }

  public completeTask(categoryId: number, taskIndex: number) {
    this.store.dispatch({type: 'COMPLETE_TASK', payload: {
      categoryId,
      taskIndex
    }});
  }

  public editTask(categoryId: number, taskIndex: number, taskDescr: string) {
    this.store.dispatch({type: 'EDIT_TASK', payload: {
      categoryId,
      taskIndex,
      taskDescr
    }});
  }

  public removeTask(categoryId: number, taskIndex: number) {
    this.store.dispatch({type: 'REMOVE_TASK', payload: {
      categoryId,
      taskIndex
    }});
  }
}
