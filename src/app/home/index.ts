import { CategoryCardComponent } from './categories-list/category-card';
import { CategoryDetailComponent } from './category-detail';
import { CategoryListComponent } from './categories-list';
import { HomeComponent } from './home.component';
import { TaskComponent } from './category-detail/tasks-list/task';
import { TaskModifyComponent } from './category-detail/task-modify';
import { TasksListComponent } from './category-detail/tasks-list';

export * from './categories-list/category-card';
export * from './category-detail';
export * from './categories-list';
export * from './home.component';
export * from './category-detail/tasks-list/task';
export * from './category-detail/task-modify';
export * from './category-detail/tasks-list';
export * from './home.service';
export * from './home-routing.module';

export const HOME_COMPONENTS = [
  CategoryCardComponent,
  CategoryDetailComponent,
  CategoryListComponent,
  HomeComponent,
  TaskComponent,
  TaskModifyComponent,
  TasksListComponent
];
